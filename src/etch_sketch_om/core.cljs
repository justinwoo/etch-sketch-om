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
(def increment 5)

;main app state
(def app-state
  (atom
    {:text "You ain't press nothin' yet"
     :svg {:width 800 :height 600}
     :cursor {:x 0 :y 0 :width increment :height increment :fill "grey"}}))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/div nil
          (dom/h1 #js {:key :title} "Welcome to Etch-Sketch Land")
          (dom/h2 #js {:key :msg} (:text app))
          (om/build etch-sketch app)))))
  app-state
  {:target (. js/document (getElementById "app"))})

(events/listen
  js/document
  events/EventType.KEYPRESS
  (fn [e]
    (let [keyCode e.keyCode
          keyCodes events/KeyCodes]
      (swap!  app-state assoc
        :text
        (str
          "You pressed "
          keyCode)))))
