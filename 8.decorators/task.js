// Задача 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...rest) {
    let hash = rest.join(',');
    let existResult = cache.filter(cacheRecord => cacheRecord.hash === hash);
    if (existResult.length === 1) {
        console.log('Из кэша: ' + existResult[0].value);
        return 'Из кэша: ' + existResult[0].value;
    } 
    else {
      let value = func.call(this, ...rest);
      console.log('Вычисляем: ' + value);
      if (cache.length < 5) {   
        cache.push({hash, value});
      } 
      else {
        cache.unshift({hash, value});
        cache.pop();
      } 
      return 'Вычисляем: ' + value;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
