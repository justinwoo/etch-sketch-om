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
      (render [this]
        (dom/rect
          #js {:width width
               :height height
               :x x
               :y y
               :fill fill})))))

(defn etch-sketch [props]
  "My Etch-Sketch board"
  (let [cursor (:cursor props)
        {width :width
         height :height} (:svg props)]
    (reify om/IRender
      (render [this]
        (dom/svg
          #js {:width width
               :height height}
          (om/build etch-cursor cursor))))))

;increment that our sketch works off of
(def increment 10)

;main app state
(def app-state
  (atom
    {:text "You ain't press nothin' yet"
     :svg {:width 800 :height 600}
     :cursor {:x 0 :y 0 :width increment :height increment :fill "grey"}}))

(om/root
  (fn [app owner]
    (print app)
    (reify om/IRender
      (render [_]
        (dom/div nil
          (dom/h1 #js {:key :title} "Welcome to Etch-Sketch Land")
          (dom/h2 #js {:key :msg} (:text app))
          (om/build etch-sketch app)))))
  app-state
  {:target (. js/document (getElementById "app"))})

(defn move-left []
  (let [app @app-state
        cursor (:cursor app)
        x (:x cursor)]
    (if (> x 0)
      (swap! app-state assoc :cursor
         (assoc cursor :x (- x increment))))))

(defn move-right []
  (let [app @app-state
        width (:width (:svg app))
        cursor (:cursor app)
        x (:x cursor)]
    (if (< x (- width increment))
      (swap! app-state assoc :cursor
         (assoc cursor :x (+ x increment))))))

(defn move-up []
  (let [app @app-state
        cursor (:cursor app)
        y (:y cursor)]
    (if (> y 0)
      (swap! app-state assoc :cursor
         (assoc cursor :y (- y increment))))))

(defn move-down []
  (let [app @app-state
        height (:height (:svg app))
        cursor (:cursor app)
        y (:y cursor)]
    (if (< y (- height increment))
      (swap! app-state assoc :cursor
         (assoc cursor :y (+ y increment))))))

(def KeyCodes
  {:h 72 :left 37
   :j 74 :up 38
   :k 75 :down 40
   :l 76 :right 39})

(defn move-cursor [keyCode]
  (let [keyCodes events/KeyCodes
        {h :h left :left
         j :j down :down
         k :k up :up
         l :l right :right} KeyCodes]
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
      (swap! app-state assoc
        :text
        (str
          "You pressed "
          keyCode))
      (move-cursor keyCode))))
