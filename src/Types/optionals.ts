function generateError(msg?: string) {
    throw new Error(msg)
}

generateError()
generateError("API failed")