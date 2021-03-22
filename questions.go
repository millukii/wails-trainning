package main

import (
	"github.com/wailsapp/wails"
)

// Counter is what we use for counting
type QuestionSet struct {
	r     *wails.Runtime
	store *wails.Store
}

type Question struct{
	ID string `json:"id"`
	Name string `json:"name"`
	Answers []string `json:"answers"`
	Topic string `json:"topic"`
	Difficult int `json:"difficult"`
}

type Questions []Question


// WailsInit is called when the component is being initialised
func (q *QuestionSet) WailsInit(runtime *wails.Runtime) error {

	var questions Questions

	q.r = runtime
	q.store = runtime.Store.New("QuestionSet", questions)
	return nil
}
