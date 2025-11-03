const cards = [
 {
    title: "🗃️ Pak DATABASE",
    desc: "Access All Pakistan SIM Information and CNIC database tools. Check number details, owner info, and more — updated and fast. Use responsibly for verification.",
    img: "images/database.png",
    link: "database.html",
    gradient: "from-pink-500 to-red-500"
  },
{
    title: "📞 Unlimited Fake Number",
    desc: "Generate unlimited fake Pakistani and international numbers for testing and verification. 100% free and instant with Kami Flex’s number generator.",
    img: "images/number.png",
    link: "nmbr.html",
    gradient: "from-green-400 to-lime-500"
  },
  {
    title: "⚡ Temp Mail ⚡",
    desc: "Generate temporary email addresses to sign up anywhere without using your personal Gmail. Full features unlocked — create, copy, and receive mail instantly.",
    img: "images/temp.png",
    link: "temp.html",
    gradient: "from-purple-400 to-indigo-600"
  },
  {
    title: "📱 SMS TOOL",
    desc: "Test your SMS sending tools with Pakistan Number SMS TOOL. Use responsibly for educational and testing purposes only. Unlimited prank features unlocked.",
    img: "images/sms.png",
    link: "sms.html",
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "🤖 AI TOOL",
    desc: "All-in-one AI tools hub — generate images, write posts, code, and more with AI Future. Unlimited creative tools unlocked 🔓 for your smart ideas and projects.",
    img: "images/ai.png",
    link: "ai.html",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "📱 Tamasha Packages",
    desc: "Activate Jazz Tamasha Unlimited Packages free without load! One OTP per package, simple activation, and non-stop entertainment in the Tamasha app.",
    img: "images/tamsha.png",
    link: "tamsha.html",
    gradient: "from-pink-500 to-yellow-400"
  },
  {
    title: "🚀 Kami Flex Application",
    desc: "Download the official Kami Flex App — All-in-One Pakistani Tools: Jazz & Zong Free TV, Tamasha Packages, Database, and AI Tools in one app.",
    img: "images/app.png",
    link: "https://www.mediafire.com/file/hde03gaafrir888/Kami_Flex.apk/file",
    gradient: "from-cyan-500 to-purple-500"
  },
   {
    title: "🎵 Jazz Free TV",
    desc: "Watch Pakistan’s top Jazz Free TV channels, live entertainment, and news shows without load. Enjoy unlimited access to movies, sports, and drama channels in one tap.",
    img: "images/jazz.png",
    link: "jazztv.html",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "📱 Zong Free TV",
    desc: "Stream your favorite Pakistani TV channels using Zong’s Free TV service. No balance required! Watch dramas, sports, and news 24/7 with high-speed streaming.",
    img: "images/zong.png",
    link: "zong.html",
    gradient: "from-green-500 to-blue-500"
  },
  {
    title: "💻 RDP Trial",
    desc: "Get a free Windows RDP trial via AppOnFly. Perfect for developers, students, and professionals — run Windows or test software online without installation.",
    img: "images/rdp.png",
    link: "https://app.apponfly.com/trial",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "✅ Ads Check",
    desc: "Monitor your ad placements, performance, and clicks easily. Useful for bloggers and creators using AdSense or other ad networks. Track every impression in real time.",
    img: "images/zong.png",
    link: "ads.html",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "🗂️ Free Internet Files",
    desc: "Download free internet configuration files for Jazz, Zong, and other Pakistani networks. Fast, secure, and daily updated for VPNs and network tweaks.",
    img: "images/file.png",
    link: "file.html",
    gradient: "from-teal-400 to-cyan-500"
  }
];

// Grab card container and search box
const cardContainer = document.getElementById('cardContainer');
const searchBox = document.getElementById('searchBox');

// Function to render cards (with search filter)
function renderCards(filter = '') {
  cardContainer.innerHTML = '';
  cards
    .filter(card => card.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(card => {
      const div = document.createElement('div');
      div.className = `card bg-gradient-to-r ${card.gradient} rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`;
      div.innerHTML = `
        <img src="${card.img}" alt="${card.title} Logo" class="w-full h-48 object-cover">
        <div class="p-4 text-center">
          <h3 class="font-bold text-white text-lg mb-1">${card.title}</h3>
          <p class="text-white/80 text-sm">${card.desc}</p>
        </div>
      `;
      div.addEventListener('click', () => window.open(card.link, '_blank'));
      cardContainer.appendChild(div);
    });
}

// Initial render (all cards)
renderCards();

// Search functionality
searchBox.addEventListener('input', (e) => {
  renderCards(e.target.value);
});
