import eventClick from '../blocksHandler/handlerEventClick';
import forms from '../blocksHandler/handlerForms';
import switchTo from '../blocksHandler/handlerSwitchTo';

// example params
// const block = {
//   data: {
//     selector: 'CSS选择器或XPath', // 根据HTML元素构造适当的选择器
//     findBy: 'cssSelector', // 或 'xpath'，取决于使用的选择器类型
//   },
//   id: 'uniqueId', // 生成一个唯一ID
//   debugMode: false, // 通常设为false，除非需要调试
//   activeTabId: 'tabId', // 如果在浏览器环境中，需要提供当前标签页ID
// };

export async function handlerClick(block) {
  eventClick(block)
    .then((result) => {
      console.log(`Clicked on element: ${result}`);
      return `Clicked on element: ${result}`;
    })
    .catch((error) => {
      console.error(`Error clicking on element: ${error}`);
      return `Error clicking on element: ${error}`;
    });
}

// example params
// const block = {
//   data: {
//     selector: 'CSS选择器或XPath', // 根据HTML元素构造适当的选择器
//     findBy: 'cssSelector', // 或 'xpath'，取决于使用的选择器类型
//     value: '输入的值', // 要输入的值
//    type:'text-field', // 要输入的值的类型
//    clearValue:true, // 是否清除值
//   },
//   id: 'uniqueId', // 生成一个唯一ID
//   debugMode: false, // 通常设为false，除非需要调试
//   activeTabId: 'tabId', // 如果在浏览器环境中，需要提供当前标签页ID
// };
export async function handlerForms(block) {
  forms(block)
    .then((result) => {
      console.log(`Form input: ${result}`);
      return `Form input: ${result}`;
    })
    .catch((error) => {
      console.error(`Error input form: ${error}`);
      return `Error input form: ${error}`;
    });
}

// example params
// const block = {
//   data: {
//     selector: 'CSS选择器或XPath', // 根据HTML元素构造适当的选择器
//     findBy: 'cssSelector', // 或 'xpath'，取决于使用的选择器类型
//   },
//   id: 'uniqueId', // 生成一个唯一ID
//   debugMode: false, // 通常设为false，除非需要调试
//   activeTabId: 'tabId', // 如果在浏览器环境中，需要提供当前标签页ID
// };
export async function handlerSwitchTo(block) {
  switchTo(block)
    .then((result) => {
      console.log(`Switched to: ${result}`);
      return `Switched to: ${result}`;
    })
    .catch((error) => {
      console.error(`Error switching to: ${error}`);
      return `Error switching to: ${error}`;
    });
}
