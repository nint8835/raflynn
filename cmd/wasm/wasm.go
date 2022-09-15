package main

import (
	"runtime/debug"

	"github.com/davecgh/go-spew/spew"
)

func main() {
	buildDetails, _ := debug.ReadBuildInfo()

	spew.Dump(*buildDetails)
}
