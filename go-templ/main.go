package main

import (
	"context"
	"os"
)

func main() {
	component := hello("david")
	component.Render(context.Background(), os.Stdout)
}
