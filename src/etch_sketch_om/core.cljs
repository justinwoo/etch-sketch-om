(ns etch-sketch-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]))

(enable-console-print!)

(def app-state (atom {:text "Default text"}))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/h1 nil (:text app)))))
  app-state
  {:target (. js/document (getElementById "app"))})

(swap! app-state assoc :text "Magic")

(events/listen
  js/document
  events/EventType.KEYPRESS
  (fn [e]
    (swap!
      app-state
      assoc
        :text
        (str
          "You pressed "
          e.keyCode))))
