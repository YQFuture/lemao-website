// 导出配置的scrollReveal 如果这个方法需要传参 记得要给他传参哦
// reveal()的类名可以为id (#reveal-top) 也可以为class(.reveal-top) 名称随意 并且也支持并集class写法 注意必须设置类否则无法使用
export function retBottomScroll(data: any) {
  data.scrollReveal.reveal('.reveal-top', {
    // 动画的时长
    duration: 900,
    // 延迟时间
    delay: 300,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: 'bottom',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    // // useDelay: 'onload',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    distance: '10px',
    // 其他可用的动画效果
    opacity: 0.01,
    // 执行速度 线性函数啥的
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    // 执行方式（缩放）
    scale: 0.9,
    // 使用执行之前的回调函数
    beforeReveal: function (ele: any) {
      console.log(1)
    },
  })
}
export function retTopsScroll(data: any) {
  data.scrollReveal.reveal('.tops', {
    // 动画的时长
    duration: 600,
    // 延迟时间
    delay: 300,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: 'right',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    // // useDelay: 'onload',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    distance: '10px',
    // 其他可用的动画效果
    opacity: 0.01,
    // 执行速度 线性函数啥的
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    // 执行方式（缩放）
    scale: 0.9,
    // 使用执行之前的回调函数
    beforeReveal: function (ele: any) {
      console.log(1)
    },
  })
}
export function retScroll(data: any) {
  data.scrollReveal.reveal('.widget', {
    interval: 300,
    // 动画的时长
    duration: 600,
    // 延迟时间
    delay: 500,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: 'bottom',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    // useDelay: 'always',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    distance: '10px',
    // 其他可用的动画效果
    opacity: 0.01,
    // 执行速度 线性函数啥的
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    // 执行方式（缩放）
    scale: 0.9,
    // viewFactor: 0.1,
    container: document.documentElement,
    // useDelay: 'always',
    viewFactor: 0.5,
    // 使用执行之前的回调函数
    beforeReveal: function (ele: any) {
      //  console.log(1);
    },
  })
}
