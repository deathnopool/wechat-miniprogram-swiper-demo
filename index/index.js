const app = getApp();

function mockData() {
  return new Array(5).fill(1);
}

Page({
  data: {
    list: new Array(10).fill(1),
    current: 0,
    duration: 600,
  },
  onLoad() {
    
  },
  onCurrentChange(detail) {
    this.setData({
      current: detail.current,
      duration: this.data.duration,
    });
  },
  handleChange(e) {
    const current = e.detail.current;
    if (current >= this.data.list.length-2)
    {
      const list = mockData();
      this.setData({
        list: this.data.list.concat(list),
      });
    }
    else if (current <= 1)
    {
      const list = mockData();
      this.setData({
        list: list.concat(this.data.list),
        current: list.length,
      });
    }
    else 
    {
      this.setData({
        current,
      });
    }
  },
  handleLeft() {
    this.setData({
      current: this.data.current - 1,
    });
  },
  handleRight() {
    this.setData({
      current: this.data.current + 1,
    });
  },
})
