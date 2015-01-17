(ns etch-sketch-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]))

(enable-console-print!)

(defn etch-cursor [props]
  "My Etch-Sketch cursor"
  (let [{width :width
         height :height
         x :x
         y :y
         fill :fill} props]
    (reify om/IRender
      (render [_]
        (dom/rect
          #js {:width width
               :height height
               :x x
               :y y
               :fill fill})))))

(defn etch-point [props]
  "My Etch-Sketch point"
  (reify om/IRender
    (render [_]
      (let [{x :x
             y :y
             width :width
             height :height} props]
        (dom/rect #js {:x x :y y :width width :height height})))))

(defn etch-trail [props]
  "My Etch-Sketch trail"
  (reify om/IRender
    (render [_]
      (apply dom/g nil
        (map (fn [point] (om/build etch-point point)) props)))))

(defn etch-sketch [props]
  "My Etch-Sketch board"
  (let [{cursor :cursor svg :svg trail :trail} props
        {width :width height :height} svg]
    (reify om/IRender
      (render [_]
        (dom/svg
          #js {:width width
               :height height}
          (om/build etch-trail trail)
          (om/build etch-cursor cursor))))))

;increment that our sketch works off of
(def increment 10)

;main app state
(def app-state
  (atom
    {:svg {:width 800 :height 600}
     :cursor {:x 0 :y 0 :width increment :height increment :fill "grey"}
     :trail []}))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/div nil
          (dom/h1 #js {:key :title} "Welcome to Etch-Sketch Land")
          (om/build etch-sketch app)))))
  app-state
  {:target (. js/document (getElementById "app"))})

(defn move-left []
  "move cursor left"
  (let [app @app-state
        cursor (:cursor app)
        x (:x cursor)]
    (if (> x 0)
      (swap! app-state assoc :cursor (assoc cursor :x (- x increment))))))

(defn move-right []
  "move cursor right"
  (let [app @app-state
        width (:width (:svg app))
        cursor (:cursor app)
        x (:x cursor)]
    (if (< x (- width increment))
      (swap! app-state assoc :cursor (assoc cursor :x (+ x increment))))))

(defn move-up []
  "move cursor up"
  (let [app @app-state
        cursor (:cursor app)
        y (:y cursor)]
    (if (> y 0)
      (swap! app-state assoc :cursor (assoc cursor :y (- y increment))))))

(defn move-down []
  "move cursor down"
  (let [app @app-state
        height (:height (:svg app))
        cursor (:cursor app)
        y (:y cursor)]
    (if (< y (- height increment))
      (swap! app-state assoc :cursor (assoc cursor :y (+ y increment))))))

(defn any-matching [pred coll]
  "return true on any matching predicate, false otherwise"
  (let [length (count coll)]
    (cond
      (= length 0) false
      (= true (pred (first coll))) true
      :else (recur pred (rest coll)))))

(defn mark-trail []
  (let [app @app-state
        {cursor :cursor trail :trail} app
        {x :x y :y} cursor]
  (if (not (any-matching (fn [a] (= cursor a)) trail))
    (swap! app-state assoc :trail (conj trail cursor)))))

(def KeyCodes
  {:h 72 :left 37
   :j 74 :up 38
   :k 75 :down 40
   :l 76 :right 39})

(defn handleKeydown [keyCode]
  (let [keyCodes events/KeyCodes
        {h :h left :left
         j :j down :down
         k :k up :up
         l :l right :right} KeyCodes]
    (mark-trail)
    (cond
      (or (= h keyCode) (= left keyCode)) (move-left)
      (or (= j keyCode) (= down keyCode)) (move-down)
      (or (= k keyCode) (= up keyCode)) (move-up)
      (or (= l keyCode) (= right keyCode)) (move-right))))

(events/listen
  js/document
  events/EventType.KEYDOWN
  (fn [e]
    (let [keyCode e.keyCode]
      (handleKeydown keyCode))))
