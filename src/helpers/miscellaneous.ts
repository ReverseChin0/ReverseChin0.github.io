
export const lerp = (a: number, b: number, t: number) => a + t * (b - a);

export function Queue(this: any) {

  this.dataStore = Array.prototype.slice.call(arguments, 0);

  const enqueue = (element: any) => {
      this.dataStore.push(element);
  }

  const dequeue = () => {
      return this.dataStore.shift();
  }

  const empty = () => {
      return this.dataStore = [];
  }

  const print = () => {
      this.dataStore.forEach(function (item: any) {
          // element.appendChild(item.node);
          console.log(item);
      });
  }

  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;

  this.print = print;
}