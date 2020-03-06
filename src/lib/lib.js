import figlet from 'figlet'

function promisedFiglet(txt) {
  return new Promise((resolve, reject) =>
    figlet(txt, (error, result) => (error ? reject(error) : resolve(result)))
  )
}

export function getAsciiArtHelloWorld() {
  return promisedFiglet('Hello World!')
}
