/* 
题目：有红绿黄三个颜色的灯，然后每个灯之间会进行切换，比如绿灯5s然后黄灯亮两秒，最后红灯亮3s，一个流程过后则是进行一个循环，重新到绿灯亮。
*/

/* 方案一：回调函数方式实现 */

/* // 模拟红灯亮
function red() {
  console.log('red');
}

//模拟绿灯亮
function green() {
  console.log('green');
}

//模拟黄灯亮
function yellow() {
  console.log('yellow');
}

const task = (timer, light, callback) => {
  setTimeout(() => {
    if (light === 'red') {
      red();
    } else if (light === 'green') {
      green();
    } else if (light === 'yellow') {
      yellow();
    }

    // 灯亮完之后执行回调
    callback();
  }, timer);
};

const step = () => {
  task(3000, 'red', () => {
    task(2000, 'green', () => {
      task(5000, 'yellow', () => {
        step();
      });
    });
  });
};

step(); */

/* 方案二：await async */

// 模拟红灯亮
function red() {
  console.log('red');
}

//模拟绿灯亮
function green() {
  console.log('green');
}

//模拟黄灯亮
function yellow() {
  console.log('yellow');
}

const task = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'green') {
        green();
      } else if (light === 'red') {
        red();
      } else if (light === 'yellow') {
        yellow();
      }
      resolve();
    }, timer);
  });
};

const step = async () => {
  await task(3000, 'red');
  await task(1000, 'green');
  await task(2000, 'yellow');
  step();
};
step();
