<template>
  <table
    class="lg:min-w-max lg:w-full lg:table-auto xl:w-full xl:min-w-max xl:table-auto 2xl:w-full 2xl:min-w-full 2xl:table-auto w-full table-auto min-w-max "
  >
    <tbody class="text-gray-600 text-sm font-light">
      <draggable v-model="list" item-key="id">
        <template #item="{element}">
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td
              class="lg:px-5  lg:w-auto xl:px-5 xl:w-auto 2xl:w-2xl text-left border-r-2 w-4 p-4"
            >
              <a :href="element.link" class="font-medium">{{ element.name }}</a>
            </td>
            <draggable
              v-model="element.data"
              item-key="id"
              class=" grid grid-flow-col grid-cols-5"
            >
              <template #item="{element}">
                <td class="py-3 px-4 lg:px-4 xl:px-7 2xl:px-7 text-left">
                  <div class="flex items-center justify-center">
                    <a
                      :href="element.link"
                      class="font-light tßext-xs w-14 lg:text-sm lg:w-full xl:text-sm xl:w-full 2xl:w-full 2xl:text-lg "
                      :title="element.name"
                    >
                      <img
                        class="inline-block w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-full justify-item-center object-cover object-center  transform hover:scale-125 transition "
                        :src="element.img"
                      />
                      {{ element.name }}
                    </a>
                  </div>
                </td>
              </template>
            </draggable>
          </tr>
        </template>
      </draggable>
    </tbody>
  </table>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "items-in-table",
  components: { draggable },
  data() {
    return {
      list: [
        {
          name: "介護",
          link: "#",
          data: [
            {
              name: "介護110番",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 1,
            },
            { name: "安心介護", link: "#", img: "images/aapb.png", id: 2 },
            {
              name: "介護保険の手引き",
              img: "images/lec-jp.gif",
              link: "#",
              id: 3,
            },
            {
              name: "介護サイト.com",
              img: "images/itojuku.png",
              link: "#",
              id: 4,
            },
            {
              name: "厚生労働省",
              img: "images/logo_latam_color.png",
              link: "#",
              id: 5,
            },
          ],
        },
        {
          name: "アニメ",
          link: "#",
          data: [
            {
              name: "アニポ",
              link: "#",
              img: "images/rakuten.png",
              id: 1,
            },
            {
              name: "バンダイチャネル",
              img: "images/ishigaki-airport.png",
              link: "#",
              id: 2,
            },
            {
              name: "アニマックスクラブ",
              img: "images/yahoo.png",
              link: "#",
              id: 3,
            },
            {
              name: "アニメ!アニメ!",
              link: "#",
              img: "images/u-can.co.png",
              id: 4,
            },
            {
              name: "アニメワン",
              link: "#",
              img: "images/softlist.png",
              id: 5,
            },
          ],
        },
        {
          name: "空港",
          link: "#",
          data: [
            {
              name: "新千歳空港",
              link: "#",
              img: "images/sakuratravel.png",
              id: 1,
            },
            {
              name: "稚内空港",
              link: "#",
              img: "images/ooyoutube.jpg",
              id: 2,
            },
            {
              name: "利尻空港",
              link: "#",
              img: "images/lec-jp.gif",
              id: 3,
            },
            {
              name: "旭川空港",
              link: "#",
              img: "images/top-fade-kansui_l.jpg",
              id: 4,
            },
            {
              name: "女満別空港",
              link: "#",
              img: "images/sec_outline_img01.png",
              id: 5,
            },
          ],
        },
        {
          name: "美術館",
          link: "#",
          data: [
            {
              name: "介護110番",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 1,
            },
            {
              name: "安心介護",
              link: "#",
              img: "images/shikakutimes.png",
              id: 2,
            },
            {
              name: "介護保険の手引き",
              link: "#",
              img: "images/oogoogle.jpg",
              id: 3,
            },
            {
              name: "介護サイト.com",
              link: "#",
              img: "images/shingakunet.png",
              id: 4,
            },
            {
              name: "厚生労働省",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 5,
            },
          ],
        },
        {
          name: "美術館",
          link: "#",
          data: [
            {
              name: "一人で美術館",
              link: "#",
              img: "images/itojuku.png",
              id: 1,
            },
            {
              name: "artscape",
              link: "#",
              img: "images/ishigaki-airport.png",
              id: 2,
            },
            {
              name: "サントリー美術館",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 3,
            },
            {
              name: "ブリヂストン美術館",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 4,
            },
            {
              name: "国立新美術館",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 5,
            },
          ],
        },
        {
          name: "銀行",
          link: "#",
          data: [
            {
              name: "三菱東京UFJ銀行",
              link: "#",
              img: "images/miyakoap.gif",
              id: 1,
            },
            {
              name: "みずほ銀行",
              link: "#",
              img: "images/lh-logo-crane.png",
              id: 2,
            },
            {
              name: "三井住友銀行",
              link: "#",
              img: "images/banner_airtrip.png",
              id: 3,
            },
            { name: "りそな銀行", link: "#", img: "images/amazon.jpg", id: 4 },
            {
              name: "楽天銀行",
              link: "#",
              img: "images/rakuten.png",
              id: 5,
            },
          ],
        },
        {
          name: "介護",
          link: "#",
          data: [
            {
              name: "新千歳空港",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 1,
            },
            {
              name: "稚内空港",
              link: "#",
              img: "images/box_r_34_2x.png",
              id: 2,
            },
            {
              name: "利尻空港",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 3,
            },
            {
              name: "旭川空港",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 4,
            },
            {
              name: "女満別空港",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 5,
            },
          ],
        },
        {
          name: "アニメ",
          link: "#",
          data: [
            {
              name: "介護110番",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 1,
            },
            {
              name: "安心介護",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 2,
            },
            {
              name: "介護保険の手引き",
              link: "#",
              img: "images/chousei_logo.png",
              id: 3,
            },
            {
              name: "介護サイト.com",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 4,
            },
            {
              name: "厚生労働省",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 5,
            },
          ],
        },
        {
          name: "空港",
          link: "#",
          data: [
            {
              name: "三菱東京UFJ銀行",
              link: "#",
              img: "images/ishigaki-airport.png",
              id: 1,
            },
            {
              name: "みずほ銀行",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 2,
            },
            {
              name: "三井住友銀行",
              link: "#",
              img: "images/foresight.png",
              id: 3,
            },
            {
              name: "りそな銀行",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 4,
            },
            { name: "楽天銀行", link: "#", img: "images/houterasu.gif", id: 5 },
          ],
        },
        {
          name: "介護",
          link: "#",
          data: [
            { name: "介護110番", link: "#", img: "images/expedia.PNG", id: 1 },
            { name: "安心介護", link: "#", img: "images/ferry_hl.png", id: 2 },
            {
              name: "介護保険の手引き",
              link: "#",
              img: "images/miyakoap.gif",
              id: 3,
            },
            {
              name: "介護サイト.com",
              link: "#",
              img: "images/G_adobeColor20190505.png",
              id: 4,
            },
            {
              name: "厚生労働省",
              link: "#",
              img: "images/4_header_ocn.gif",
              id: 5,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style></style>
