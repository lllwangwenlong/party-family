<template>
    <div class="container">
      <Header></Header>
      <div id="map">

      </div>
    </div>
</template>
<script>
    export default {
      methods: {

      },
      mounted() {
        const map = new BMap.Map("map");          // 创建地图实例
        const Bpoint = new BMap.Point(116.404, 39.915);  // 创建点坐标
        const Zpoint = new BMap.Point(114.16,33.24)
        const opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM ,//添加缩放控件
                      anchor:BMAP_ANCHOR_TOP_LEFT}
        var opts1 = {
          position : Bpoint,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(30, -30)    //设置文本偏移量
        }
        var opts2 = {
          position : Zpoint,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label1 = new BMap.Label("信息工程学院学生流动党支部 支部书记：高洋 电话：13526395586", opts1);  // 创建文本标注对象
        var label2 = new BMap.Label("信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032", opts2);  // 创建文本标注对象
        label1.setStyle({
          color : "red",
          fontSize : "12px",
          height : "20px",
          lineHeight : "20px",
          fontFamily:"微软雅黑"
        });
        label2.setStyle({
          color : "red",
          fontSize : "12px",
          height : "20px",
          lineHeight : "20px",
          fontFamily:"微软雅黑"
        });
        map.addOverlay(label1);
        map.addOverlay(label2);
        map.addControl(new BMap.NavigationControl(opts));
        const Bmarker = new BMap.Marker(Bpoint);        // 创建标注
        map.addOverlay(Bmarker);                     // 将标注添加到地图中
        const Zmarker = new BMap.Marker(Zpoint);        // 创建标注
        map.addOverlay(Zmarker);                     // 将标注添加到地图中
        map.centerAndZoom(Bpoint, 15);         // 初始化地图，设置中心点坐标和地图级别
      }
    }
</script>

<style scoped>
  #map {
    margin-top: 0.86rem;
    width: 7.5rem;
    height: 100vh;
  }
</style>

