<script setup>
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { locale } = useI18n({ useScope: 'global' })
</script>
<template>
  <div class="terms-policy q-py-lg" :class="$q.screen.gt.sm ? 'q-px-xl' : 'q-px-sm'">
    <template v-if="locale === 'en'">
      <div class="text-h4">Cookies Policy</div>
      <div class="text-h6">What are cookies?</div>
      <p>
        Cookies are small text files containing a string of characters that can be placed on your computer or mobile
        device that uniquely identifies your browser or device. We may use technologies like cookies, pixels and local
        storage to deliver, secure, and understand products, services, and ads.</p>
      <div class="text-h6">What are cookies used for?</div>
      <p>
        Cookies and other technologies allow a site or services to know if your computer or device has visited it
        before. These technologies can then be used to deliver products, services, and ads, help us understand how the
        site or service is being used, help you navigate between pages efficiently, help remember your preferences, and
        generally improve your experience in using our services. Cookies can also help ensure marketing you see online
        is more relevant to you and your interests.</p>
      <div class="text-h6">Why does Tradurs use cookies and similar technologies?</div>
      <p>We use cookies, pixels, local storage, and similar technologies to show you relevant content, improve your
        experience, and help protect Tradurs and our users. We may use these technologies to deliver the service,
        provide you with a service that is easy to use, enables you to move around the Service and use its features,
        such as accessing secure areas, and store information so that Tradurs responds faster. We may use these
        technologies to collect information about how you use the Service, for example which pages you go to most often
        and if you get error messages from certain pages. We may use these technologies to allow us to remember choices
        you make (such as your user name, language or the region you're in) and tailor the Service to provide enhanced
        features and content for you. These cookies can also be used to remember changes you've made to text size, font
        and other parts of pages that you can customize. Tradurs or our advertising partners may use these
        technologies to deliver advertising that is relevant to your interests. These technologies can remember that
        your device has visited a site or service, and may also be able to track your device's browsing activity on
        other sites or services other than Tradurs. This information may be shared with organizations outside
        Tradurs, such as advertisers and/or advertising networks to deliver the advertising, and to help measure the
        effectiveness of an advertising campaign. *We may use these technologies to understand, improve, and research
        products and services.</p>
      <div class="text-h6">How long will cookies stay on my device?</div>
      <p>The length of time a cookie will stay on your computer or mobile device depends on whether it is a "persistent"
        or "session" cookie. Session cookies will only stay on your device until you stop browsing. Persistent cookies
        stay on your computer or mobile device until they expire or are deleted.</p>
      <div class="text-h6">First and third party cookies</div>
      <p>
        First-party cookies are cookies that belong to Tradurs, third-party cookies are cookies that another party
        places on your device through our Service. Third-party cookies may be placed on your device by someone providing
        a service for Tradurs, for example to help us understand how our service is being used. Third-party cookies
        may also be placed on your device by our business partners so that they can use them to advertise products and
        services to you elsewhere on the Internet.
      </p>
      <div class="text-h6">How to control cookies or other collection mechanisms</div>
      <p>
        Follow the instructions provided by your website or mobile browser (usually located within the "Help", "Tools"
        or "Edit" facility) to modify your cookie settings. Please note that if you set your browser to disable cookies
        or other technologies, you may not be able to access certain parts of our Service and other parts of our Service
        may not work properly.
      </p>
      <p>
        To learn more about the choices that advertisers provide generally for individuals to influence how information
        about their online activities over time and across third-party Web sites or online services is collected and
        used, visit the
      </p>
      <ul>
        <li>Network Advertising Initiative at http://www.networkadvertising.org/managing/opt_out.asp</li>
        <li>the Digital Advertising Alliance at http://www.aboutads.info/</li>
        <li>the European Digital Advertising Alliance at http://youronlinechoices.eu/</li>
      </ul>
      <p>
        In addition, your browser or device may offer settings that allow you to choose whether browser cookies are set
        and to delete them. These controls vary by browser, and manufacturers may change both the settings they make
        available and how they work at any time. As of 5 October 2020, you may find additional information about the
        controls offered by popular browsers at the links below. Certain parts of the Tradurs Service may not work
        properly if you have disabled browser cookie use.
      </p>
    </template>
    <template v-else>
      <div class="text-h4">쿠키 정책</div>
      <div class="text-h6">쿠키의 정의</div>
      <p>
        쿠키는 사용자의 컴퓨터나 모바일 기기에 설치되어 사용자의 브라우저나 기기를 식별할 수 있는 문자열이 담긴 작은 텍스트 파일입니다. 당사는 제품, 서비스 및 광고를 제공하고, 보호하고, 이해하기 위해
        쿠키, 픽셀 및 로컬 스토리지 같은 기술을 사용할 수 있습니다.</p>
      <div class="text-h6">쿠키의 용도</div>
      <p>
        사이트 또는 서비스에서 쿠키 및 기타 기술을 사용하여 사용자의 컴퓨터 또는 기기가 이전에 해당 사이트 또는 서비스를 방문했는지를 알 수 있습니다. 이후 이러한 기술을 사용하여 제품, 서비스 및 광고를
        제공하고, 사이트 또는 서비스의 이용 현황을 파악하며, 사용자가 페이지를 효율적으로 이동할 수 있게 해주고, 사용자의 기본 설정을 기억하며, 사용자의 전반적인 서비스 경험을 개선할 수 있습니다. 쿠키는
        사용자가 온라인에서 보는 마케팅이 사용자 및 사용자의 관심사와 관련성이 높은지를 확인할 때도 도움이 될 수 있습니다.</p>
      <div class="text-h6">Tradurs에서 쿠키 및 유사한 기술을 사용하는 이유</div>

      <p>당사는 쿠키, 픽셀, 로컬 스토리지 및 유사 기술을 사용하여 관련 콘텐츠를 표시하고, 사용자 경험을 개선하며, Tradurs과 당사 이용자를 보호합니다. 이러한 기술을 사용하여 서비스를 구현하며,
        사용하기 편리한 서비스를 제공하고, 서비스 내에서 이동이 가능하며 보안 영역 액세스 같은 기능을 이용하고, Tradurs에서 보다 신속하게 대응하도록 정보를 저장할 수 있습니다. 이러한 기술을
        사용하여 사용자가 가장 자주 방문하는 페이지 및 특정 페이지에서의 오류 메시지 표시 여부 등 사용자의 서비스 이용 현황에 관한 정보를 수집할 수 있습니다. 이러한 기술을 사용하여 사용자가 선택한
        사항(예: 사용자 이름, 언어, 지역)을 기억하고, 사용자에게 향상된 기능과 콘텐츠를 제공하는 맞춤 서비스를 제공할 수 있습니다. 또한 이러한 쿠키는 사용자가 선택한 텍스트 크기, 글꼴 및 사용자가
        맞춤 설정을 할 수 있는 페이지의 다른 요소를 기억하는 데 사용될 수 있습니다. Tradurs 또는 당사 광고 파트너는 이러한 기술을 사용하여 사용자의 관심사와 관련된 광고를 제공할 수 있습니다.
        이러한 기술을 통해 사용자의 기기가 사이트 또는 서비스를 방문했는지를 기억할 수 있으며, Tradurs 이외의 다른 사이트나 서비스에서 사용자의 기기가 실행하는 검색 활동도 추적할 수 있습니다. 이
        정보를 Tradurs 외부 조직(예: 광고주 및/또는 광고 네트워크)과 공유하여 광고를 제공하고, 광고 캠페인의 효과를 측정할 수 있습니다. *당사는 이러한 기술을 사용하여 제품과 서비스를 이해하고,
        개선하며, 연구할 수 있습니다.</p>
      <div class="text-h6">쿠키가 기기에 유지되는 기간</div>
      <p>쿠키가 사용자의 컴퓨터나 모바일 기기에 유지되는 시간은 "영구적" 쿠키인지 또는 "세션" 쿠키인지에 따라 다릅니다. 세션 쿠키는 사용자가 검색을 멈추기 전까지만 기기에 유지됩니다. 영구적 쿠키는 만료
        기간까지 또는 삭제 전까지 사용자의 컴퓨터나 모바일 기기에 유지됩니다.</p>
      <div class="text-h6">1차 쿠키와 제3자 쿠키</div>
      <p>
        1차 쿠키는 Tradurs에 속하는 쿠키이고, 제3자 쿠키는 제3자가 당사 서비스를 통해 사용자 기기에 설치하는 쿠키입니다. Tradurs에 서비스를 제공하는 사람이 당사 서비스 이용 현황을
        파악하기 쉽도록 제3자 쿠키를 사용자 기기에 설치할 수 있습니다. 제3자 쿠키는 인터넷 상에서 제품과 서비스를 광고할 때 사용할 수 있도록 당사 비즈니스 파트너가 사용자 기기에 설치할 수도 있습니다.
      </p>
      <div class="text-h6">쿠키 또는 기타 수집 메커니즘의 제어 방식</div>
      <p>
        이용하는 웹사이트 또는 모바일 브라우저에서 제공되는 지침(일반적으로 “도움말”, “도구” 또는 “수정” 기능에 있음)에 따라 쿠키 설정을 수정하세요. 쿠키 또는 기타 기술을 사용하지 않도록 브라우저를
        설정하는 경우, 당사 서비스의 일부에 액세스하지 못할 수 있으며 당사 서비스의 기타 구성이 제대로 작동하지 않을 수도 있습니다.
      </p>
      <p>
        타사 웹사이트 또는 온라인 서비스에서 시간 경과에 따른 사용자의 온라인 활동에 관한 정보 수집 및 이용 방식을 사용자가 설정할 수 있도록 광고주가 일반적으로 제공하는 옵션을 자세히 알아보려면
      </p>
      <ul>
        <li>네트워크 광고 이니셔티브 (http://www.networkadvertising.org/managing/opt_out.asp)</li>
        <li>디지털 광고 연합 (http://www.aboutads.info/)</li>
        <li>유럽연합 디지털 광고 연합 (http://youronlinechoices.eu/)</li>
      </ul>
      <p>을 참조하세요.
      </p>
      <p>
        브라우저 또는 기기에서 브라우저 쿠키를 설정할지 여부를 선택하고 삭제할 수 있는 설정을 제공할 수 있습니다. 관리 기능은 브라우저마다 다르며 제조사는 제공할 설정과 작동 방식을 언제든지 변경할 수
        있습니다. 2020년 10월 5일부터 주요 브라우저에서 제공하는 관리 기능에 대한 추가 정보를 아래 링크에서 확인할 수 있습니다. 브라우저의 쿠키 사용을 비활성화한 경우 Tradurs 서비스 중 특정
        부분이 제대로 작동하지 않을 수 있습니다.
      </p>
    </template>
  </div>
</template>
<style scoped>
.terms-policy {
  user-select: none;
}

.terms-policy p {
  margin: 1em 0 0 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0 0 0 1vw;
  word-break: break-all;
}

li {
  margin: 0.4em 0 0 0;
}

.text-h6 {
  padding: 1.4em 0 0 0;
  font-weight: bold;
}

.text-h4 {
  font-weight: bold;
}
</style>