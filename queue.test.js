const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()

    expect(queue.size()).toEqual(0)

    queue.add('laranja')
    expect(queue.size()).toEqual(1)

    queue.add('uva')
    expect(queue.size()).toEqual(2)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()

    expect(queue.size()).toEqual(0)

    queue.add('laranja')
    expect(queue.size()).toEqual(1)
    expect(queue.elements).toEqual(['laranja'])

    queue.add('uva')
    expect(queue.size()).toEqual(2)
    expect(queue.elements).toEqual(['laranja', 'uva'])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()

    expect(queue.peek()).toEqual(undefined)

    queue.add('laranja')
    expect(queue.peek()).toEqual('laranja')

    queue.add('uva')
    expect(queue.peek()).toEqual('laranja')

    queue.dequeue()
    expect(queue.peek()).toEqual('uva')
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()

    expect(queue.dequeue()).toEqual(undefined)

    queue.add('laranja')
    expect(queue.dequeue()).toEqual('laranja')
    expect(queue.size()).toEqual(0)

    queue.add('uva')
    queue.add('amora')
    expect(queue.dequeue()).toEqual('uva')
    expect(queue.size()).toEqual(1)
  })
})