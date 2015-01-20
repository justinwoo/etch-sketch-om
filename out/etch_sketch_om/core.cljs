(ns etch-sketch-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]))

(enable-console-print!)

(defn etch-point [props]
  "My Etch-Sketch point"
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
          (om/build etch-point cursor))))))

(def increment
  "increment that our sketch works off of"
  10)

(def app-state
  (atom
    {:svg {:width 800 :height 600 :point-fill "black"}
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

(def axis-to-dimension
  "axis to dimension translation hashmap"
  {:x :width
   :y :height})

(defn move-cursor [axis operator]
  "move cursor by the axis using the operator"
  (let [app @app-state
        {svg :svg cursor :cursor} app
        dimension (axis-to-dimension axis)
        limit (dimension svg)
        value (axis cursor)
        update (operator value increment)]
    (if (and (>= update 0) (< update limit))
      (swap! app-state assoc :cursor (assoc cursor axis update)))))

(defn same-point-value [a b]
  "return true if point values are same, false otherwise"
  (and
    (= (:x a) (:x b))
    (= (:y a) (:y b))))

(defn mark-trail []
  "add to the trail if the cursor position is unique in the trail"
  (let [app @app-state
        {cursor :cursor trail :trail svg :svg} app
        point-fill (:point-fill svg)
        {x :x y :y} cursor]
  (if (not-any? (fn [a] (same-point-value cursor a)) trail)
    (swap! app-state assoc :trail (conj trail (assoc cursor :fill point-fill))))))

(def KeyCodes
  "keycodes that we care about for the keydown event"
  {:h 72 :left 37
   :j 74 :up 38
   :k 75 :down 40
   :l 76 :right 39})

(defn handleKeydown [keyCode]
  (let [{h :h left :left
         j :j down :down
         k :k up :up
         l :l right :right} KeyCodes]
    (mark-trail)
    (cond
      (or (= h keyCode) (= left keyCode)) (move-cursor :x -)
      (or (= j keyCode) (= down keyCode)) (move-cursor :y +)
      (or (= k keyCode) (= up keyCode)) (move-cursor :y -)
      (or (= l keyCode) (= right keyCode)) (move-cursor :x +))))

(events/listen
  js/document
  events/EventType.KEYDOWN
  (fn [e]
    (let [keyCode e.keyCode]
      (handleKeydown keyCode))))
