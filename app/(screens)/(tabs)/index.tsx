import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const categories = [
  "Kiếm hiệp",
  "Tình cảm",
  "Xã hội",
  "Anime",
  "Trung quốc",
  "3D",
];
const sliderData = [
  {
    categories: "Kiếm hiệp",
    title: "Đạo trường huyền thoại",
    titleChina: "日本",
    number: "1",
    lastNumber: "3000",
    image: require("../../../assets/images/image/1.jpg"),
  },
  {
    categories: "Xã hội",
    title: "Tình yêu học trò",
    titleChina: "日本",
    number: "1",
    lastNumber: "3000",
    image: require("../../../assets/images/image/2.jpg"),
  },
  {
    categories: "Trung quốc",
    title: "Thế giới hoàn mỹ",
    titleChina: "日本",
    number: "1",
    lastNumber: "3000",
    image: require("../../../assets/images/image/3.jpg"),
  },
  {
    categories: "Truyện 3D",
    title: "Nghịch thiên",
    titleChina: "日本",
    number: "1",
    lastNumber: "3000",
    image: require("../../../assets/images/image/4.jpg"),
  },
  {
    categories: "Kiếm hiệp",
    title: "Đạo trường huyền thoại",
    titleChina: "日本",
    number: "1",
    lastNumber: "3000",
    image: require("../../../assets/images/image/5.jpg"),
  },
];
const articles = [
  {
    title: "Tiếu Ngạo Giang Hồ",
    titleChina: "笑傲江湖",
    description:
      "Một trong những tác phẩm kinh điển của Kim Dung, kể về hành trình của Lệnh Hồ Xung trong thế giới võ lâm...",
    content: "Nội dung bài viết 1",
    date: "2023-10-01",
    image: require("../../../assets/images/image/1.jpg"),
  },
  {
    title: "Anh Hùng Xạ Điêu",
    titleChina: "射雕英雄传",
    description:
      "Truyện kể về cuộc phiêu lưu của Quách Tĩnh và Hoàng Dung, hai nhân vật chính trong cuộc chiến chống lại quân Mông Cổ.",
    content: "Nội dung bài viết 2",
    date: "2023-10-02",
    image: require("../../../assets/images/image/2.jpg"),
  },
  {
    title: "Thiên Long Bát Bộ",
    titleChina: "天龙八部",
    description:
      "Tác phẩm lôi cuốn về cuộc hành trình của ba anh hùng Kiều Phong, Đoàn Dự, và Hư Trúc trong thế giới võ hiệp phức tạp.",
    content: "Nội dung bài viết 3",
    date: "2023-12-15",
    image: require("../../../assets/images/image/3.jpg"),
  },
  {
    title: "Thần Điêu Đại Hiệp",
    titleChina: "神雕侠侣",
    description:
      "Câu chuyện xoay quanh mối tình đầy trắc trở giữa Dương Quá và Tiểu Long Nữ, hai nhân vật chính trong thế giới võ lâm của Kim Dung.",
    content: "Nội dung bài viết 4",
    date: "2023-10-04",
    image: require("../../../assets/images/image/4.jpg"),
  },
  {
    title: "Bích Huyết Kiếm",
    titleChina: "碧血剑",
    description:
      "Câu chuyện về Viên Thừa Chí, một kiếm khách trẻ tuổi phải đối đầu với những âm mưu trong giang hồ và tình yêu đầy thử thách.",
    content: "Nội dung bài viết 5",
    date: "2023-10-05",
    image: require("../../../assets/images/image/5.jpg"),
  },
  {
    title: "Lộc Đỉnh Ký",
    titleChina: "鹿鼎记",
    description:
      "Tác phẩm nổi bật về Vi Tiểu Bảo, một nhân vật mưu trí và đầy thủ đoạn, đối mặt với những âm mưu trong chốn cung đình.",
    content: "Nội dung bài viết 6",
    date: "2023-10-06",
    image: require("../../../assets/images/image/6.jpg"),
  },
  {
    title: "Ỷ Thiên Đồ Long Ký",
    titleChina: "倚天屠龙记",
    description:
      "Câu chuyện về Trương Vô Kỵ và cuộc hành trình tìm kiếm hai món báu vật trong giang hồ: Đồ Long Đao và Ỷ Thiên Kiếm.",
    content: "Nội dung bài viết 7",
    date: "2023-10-07",
    image: require("../../../assets/images/image/7.jpg"),
  },
  {
    title: "Bạch Mã Khiếu Tây Phong",
    titleChina: "白马啸西风",
    description:
      "Tác phẩm ngắn kể về tình yêu và số phận bi thảm của cô gái Liên Thành Bích và chàng trai trong thế giới võ lâm.",
    content: "Nội dung bài viết 8",
    date: "2023-10-08",
    image: require("../../../assets/images/image/8.jpg"),
  },
  {
    title: "Liên Thành Quyết",
    titleChina: "连城诀",
    description:
      "Câu chuyện về Địch Vân, một chàng trai trung thực phải đối mặt với sự lừa dối và âm mưu trong võ lâm.",
    content: "Nội dung bài viết 9",
    date: "2023-10-09",
    image: require("../../../assets/images/image/9.jpg"),
  },
  {
    title: "Ngũ Độc Giáo",
    titleChina: "五毒教",
    description:
      "Câu chuyện xoay quanh cuộc chiến giành quyền lực và bí mật trong Ngũ Độc Giáo, một giáo phái nổi tiếng với các độc thuật.",
    content: "Nội dung bài viết 10",
    date: "2023-10-10",
    image: require("../../../assets/images/image/10.jpg"),
  },
  {
    title: "Hiệp Khách Hành",
    titleChina: "侠客行",
    description:
      "Câu chuyện về Thạch Phá Thiên, một chàng trai bất ngờ bước chân vào thế giới võ hiệp và phải đối mặt với nhiều thử thách.",
    content: "Nội dung bài viết 11",
    date: "2023-10-11",
    image: require("../../../assets/images/image/11.jpg"),
  },
  {
    title: "Tuyết Sơn Phi Hồ",
    titleChina: "雪山飞狐",
    description:
      "Câu chuyện về cuộc hành trình của Hồ Phỉ, một anh hùng với nhiều thù hận và mối tình phức tạp trong thế giới võ lâm.",
    content: "Nội dung bài viết 12",
    date: "2023-10-12",
    image: require("../../../assets/images/image/12.jpg"),
  },
  {
    title: "Việt Nữ Kiếm",
    titleChina: "越女剑",
    description:
      "Một tác phẩm ngắn kể về nàng A Thanh, một cô gái với khả năng kiếm thuật phi thường, trở thành huyền thoại trong lịch sử võ lâm.",
    content: "Nội dung bài viết 13",
    date: "2023-10-13",
    image: require("../../../assets/images/image/13.jpg"),
  },
  {
    title: "Kiếm Độc Dược",
    titleChina: "剑毒药",
    description:
      "Câu chuyện về cuộc chiến tranh giành quyền lực và sự đố kỵ trong giới võ lâm với những âm mưu độc ác.",
    content: "Nội dung bài viết 14",
    date: "2023-10-14",
    image: require("../../../assets/images/image/14.jpg"),
  },
  {
    title: "Phong Vân",
    titleChina: "风云",
    description:
      "Tác phẩm nổi tiếng kể về cuộc chiến giữa các môn phái lớn trong võ lâm, với sự tham gia của hai nhân vật chính: Bộ Kinh Vân và Nhiếp Phong.",
    content: "Nội dung bài viết 15",
    date: "2023-10-15",
    image: require("../../../assets/images/image/11.jpg"),
  },
  {
    title: "Ma Kiếm",
    titleChina: "魔剑",
    description:
      "Câu chuyện huyền bí về một thanh kiếm ma thuật, gây ra những cuộc chiến đẫm máu và ám ảnh trong giới võ lâm.",
    content: "Nội dung bài viết 16",
    date: "2023-10-16",
    image: require("../../../assets/images/image/11.jpg"),
  },
  {
    title: "Thất Tinh Bảo Kiếm",
    titleChina: "七星宝剑",
    description:
      "Một câu chuyện về thanh bảo kiếm thất tinh, được truyền từ đời này sang đời khác trong giới võ lâm, gắn liền với số phận của các anh hùng.",
    content: "Nội dung bài viết 17",
    date: "2023-10-17",
    image: require("../../../assets/images/image/11.jpg"),
  },
  {
    title: "Càn Khôn Đại Na Di",
    titleChina: "乾坤大挪移",
    description:
      "Tác phẩm kể về tuyệt kỹ võ công Càn Khôn Đại Na Di, một môn võ học được các cao thủ truy tìm trong suốt nhiều năm.",
    content: "Nội dung bài viết 18",
    date: "2023-10-18",
    image: require("../../../assets/images/image/11.jpg"),
  },
  {
    title: "Độc Cô Cầu Bại",
    titleChina: "独孤求败",
    description:
      "Câu chuyện về Độc Cô Cầu Bại, một kiếm khách huyền thoại, với cuộc đời cô độc và sự tìm kiếm đối thủ xứng tầm.",
    content: "Nội dung bài viết 19",
    date: "2023-10-19",
    image: require("../../../assets/images/image/11.jpg"),
  },
  {
    title: "Ngọa Hổ Tàng Long",
    titleChina: "卧虎藏龙",
    description:
      "Tác phẩm nổi tiếng kể về cuộc chiến tranh giành quyền lực giữa các thế lực trong võ lâm, với những bí mật bị chôn giấu lâu đời.",
    content: "Nội dung bài viết 20",
    date: "2023-10-19",
    image: require("../../../assets/images/image/11.jpg"),
  },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const _renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity>
        <View style={styles.sliderItem}>
          <View style={styles.sliderItemOverlay}>
            <View style={styles.sliderItemIconContainer}>
              <Image
                source={require("../../../assets/images/icon/kiemhiep.png")}
                style={styles.sliderItemIcon}
              />
            </View>
            <View style={styles.sliderItemTextContainer}>
              <Text style={styles.sliderItemCategory}>{item.categories}</Text>
              <Text style={styles.sliderItemNumber}>
                ({item.number}/{item.lastNumber})
              </Text>
            </View>
          </View>
          <Image source={item.image} style={styles.sliderItemImage} />
          <View style={styles.sliderItemTitleContainer}>
            <Text style={styles.sliderItemTitleChina}>{item.titleChina}</Text>
            <Text style={styles.sliderItemTitle}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.centered}>
          <View style={styles.inputContainer}>
            <Image
              source={require("../../../assets/images/icon/search2.png")}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Tìm kiếm"
              placeholderTextColor="#ccc"
            />
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Thể loại</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index}>
                <View style={styles.categoryItem}>
                  <Text style={styles.categoryText}>{category}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Mới cập nhật</Text>
            <Text style={styles.headerSubtitle}>Tất cả</Text>
          </View>
          <View style={styles.carouselContainer}>
            <Carousel
              layout="default"
              data={sliderData}
              renderItem={_renderItem}
              sliderWidth={400}
              itemWidth={350}
              inactiveSlideScale={0.9}
              inactiveSlideOpacity={0.7}
              contentContainerCustomStyle={{ paddingLeft: 0 }}
              onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
              dotsLength={sliderData.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.paginationDot}
              inactiveDotStyle={styles.paginationInactiveDot} // Ensure this is an object
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Nổi bật</Text>
            <Text style={styles.headerSubtitle}>Tất cả</Text>
          </View>
          <View style={styles.containerContent}>
            {articles.map((content, index) => (
              <TouchableOpacity>
                <View style={styles.card} key={index}>
                  <Image source={content.image} style={styles.imageCard} />
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{content.title}</Text>
                    <Text style={styles.subtitle}>({content.titleChina})</Text>
                    <Text style={styles.description}>
                      {content.description}
                    </Text>
                    <View style={styles.footer}>
                      <Text style={styles.date}>{content.date}</Text>
                      <Text style={styles.readMore}>Đọc thêm</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5b5b5b",
  },
  centered: {
    alignItems: "center",
  },
  inputContainer: {
    width: "95%",
    height: 50,
    backgroundColor: "#747474",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
    color: "#fff",
  },
  categoryContainer: {
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    paddingVertical: 10,
  },
  categoryItem: {
    backgroundColor: "#a2a2a2",
    width: 100,
    height: 35,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  categoryText: {
    color: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 15,
    color: "#fff",
  },
  carouselContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.1,
  },
  sliderItem: {
    padding: 10,
  },
  sliderItemOverlay: {
    zIndex: 9999,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    top: 20,
    left: 20,
  },
  sliderItemIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#474747",
    borderRadius: 20,
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
  },
  sliderItemIcon: {
    width: 30,
    height: 30,
  },
  sliderItemTextContainer: {
    marginLeft: 10,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  sliderItemCategory: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  sliderItemNumber: {
    fontSize: 15,
    color: "#fff",
  },
  sliderItemImage: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  sliderItemTitleContainer: {
    position: "absolute",
    bottom: 30,
    left: 20,
  },
  sliderItemTitleChina: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  sliderItemTitle: {
    fontSize: 15,
    color: "#fff",
  },
  paginationContainer: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    marginTop: 2,
    width: 50,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginHorizontal: 2, // Reduced margin to decrease spacing
  },
  paginationInactiveDot: {
    backgroundColor: "#000",
  },
  containerContent: {
    padding: 10,
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#808080",
    width: "100%",
    height: "auto",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  textContainer: {
    width: "70%",
    gap: 3,
  },
  title: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 15,
    color: "#fff",
  },
  description: {
    fontSize: 13,
    color: "#fff",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  date: {
    fontSize: 15,
    color: "#fff",
  },
  readMore: {
    fontSize: 15,
    color: "#fff",
  },
});
