let title = document.title
let input = document.querySelector('textarea').value
document.querySelector('textarea').value = localStorage.getItem('text')
let didDo = false
let output
function go(event) {
//  var x = event.keyCode;
  localStorage.setItem('text', document.querySelector('textarea').value)
  input = document.querySelector('textarea').value
  output = input.split('').length
  if (input === 'clear()') {
    reset()
  }
  else if (input === 'reset()') {
    reset()
  }
  else if (input.startsWith('goToSite(') === true && input.endsWith(')') === true) {
//    let url = prompt('Enter the url of the page to go to.')
    if (Boolean(input.split("'")[1]) === true) {
      let url = input.split("'")[1]
      window.open(url)
      reset()
    }
    else if (Boolean(input.split('"')[1]) === true) {
      let url = input.split('"')[1]
      window.open(url)
      reset()
    }
    else if (Boolean(input.split('`')[1]) === true) {
      let url = input.split('`')[1]
      window.open(url)
      reset()
    }
  }
  if (input.endsWith(' ') === true) {
    output--
  }
  if (output === 1) {
    if (input === '') {
      output = 0
    }
    else {
      word = ''
    }
  }
  else {
    word = 's'
  }
  if (Boolean(input.endsWith(`
`)) === true) {
    if (Boolean(input.endsWith(`

`)) === true) {
      if (Boolean(input.endsWith(`


`)) === true) {
 //       document.querySelector('textarea').value = input.split(input.substring(input.split('').length + 2))[0]
        output--
        output--
        output--
      }
      output--
      output--
    }
    output--
  }
  if (didDo === true) {
    if (output === 0) {
      document.title = title
      didDo = false
    }
    else {
      document.title = output + ' Character' + word + ' | ' + title.split(' | ')[0]
    }
  }
  else if (didDo === false) {
    if (output !== 0) {
      document.title = output + ' Character' + word + ' | ' + title.split(' | ')[0]
      didDo = true
    }
  }
}

function reset() {
  localStorage.removeItem('text')
  document.querySelector('textarea').setAttribute('onkeydown','')
    document.querySelector('textarea').value = ''
}

go()