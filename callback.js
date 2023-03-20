function greeting(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  greeting('Alice', sayGoodbye);