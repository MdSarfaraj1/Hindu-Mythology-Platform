const topics = [
  // Sacred Texts
  {
  name: "Vedas",
    category: "Sacred Texts",
    usercount: 9,
    description: "The Vedas are the eternal source of wisdom, unveiling the divine mysteries of existence and guiding humanity towards truth and enlightenment.",
    image: "https://indianfestival101.com/wp-content/uploads/2023/04/The-Vedas.jpg"
  },
  {
    name: "Upanishad",
    category: "Sacred Texts",
    usercount: 8,
    description: "The Upanishads delve into profound philosophical truths, bridging the soul's journey from ignorance to supreme self-realization.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_tmWS9k6SuUCzYHHkPEBWOThXI4pKkjDtyA3pcfZ1DMPxm5gNYWPlYQfGI5mSaDMBQDvXROW7QQN4wgmPVVA6MmQp2I0_PiUj5hnQPEbiCYy6rzzxB9UAQmWH6QNRtIHEf89IQZPvi3A/s1600/Amazing+Facts+about+Upanishads+Hindu+Rishis.jpg"
  },
  {
    name: "Bhagavad Gita",
    category: "Sacred Texts",
    usercount: 0,
    description: "The Bhagavad Gita is the song of the Divine, offering timeless guidance on duty, devotion, and the path to liberation amidst life's battles.",
    image: "https://iskconcongregation.com/wp-content/uploads/2022/12/Advent-of-Srimad-Bhagavad-Gita.png"
  },
  {
    name: "Puranas",
    category: "Sacred Texts",
    usercount: 7,
    description: "The Puranas weave enchanting tales of creation, preservation, and the cosmic dance of the divine, connecting the eternal with the mortal.",
    image: "https://hindupost.in/wp-content/uploads/2020/12/Puranas.jpg"
  },

  // Epics

  {
    name: "Mahabharata",
    category: "Epics",
    usercount: 9,
    description: "The Mahabharata is the grand tapestry of life, revealing the eternal struggles of duty, morality, and dharma in the complex fabric of human relationships.",
    image: "https://www.livehindustan.com/lh-img/uploadimage/library/2019/11/21/16_9/16_9_6/kurushestra__1574337545.jpg"
  },
  {
    name: "Ramayana",
    category: "Epics",
    usercount: 9,
    description: "The Ramayana is the sacred tale of virtue, devotion, and the triumph of dharma, epitomized by Lord Rama's unwavering commitment to righteousness.",
    image: "https://gurukul.org/wp-content/uploads/2023/05/Lessons-from-Ramayan.png"
  },
  {
    name: "Temples History",
    category: "History",
    usercount: 6,
    description: "The history of temples is the chronicle of devotion etched in stone, embodying the spiritual aspirations and cultural artistry of countless generations.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Ankor_Wat_temple.jpg"
  },
  {
    name: "Hindu Philosophy",
    category: "Philosophy",
    usercount: 8,
    description: "Hindu philosophy offers a profound inquiry into the nature of existence, guiding the seeker from illusion to the realization of ultimate truth and unity.",
    image: "https://m.media-amazon.com/images/I/51PgJ2GjbQL._AC_UF1000,1000_QL80_.jpg"
  },
  // Ramayana Characters
  {
    name: "Lord Rama",
    category: "Ramayana Characters",
    usercount: 0,
    description: "Lord Rama, the prince of Ayodhya and an avatar of Lord Vishnu, embodies dharma and virtue, guiding humanity with his unwavering righteousness and deep compassion.",
    image: "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg"
  },
  {
    name: "Sita",
    category: "Ramayana Characters",
    usercount: 0,
    description: "Sita, the wife of Lord Rama and the daughter of King Janaka, is the epitome of purity, devotion, and strength, showcasing unwavering resilience in the face of trials.",
    image: "https://ritsin.com/wp-content/uploads/2016/01/lord-hanuman-ji-with-maa-sita-1.jpg"
  },
  {
    name: "Lakshmana",
    category: "Ramayana Characters",
    usercount: 9,
    description: "Lakshmana, the loyal brother of Lord Rama, symbolizes loyalty and selfless service, standing by him through every challenge.",
    image: "https://images.tv9hindi.com/wp-content/uploads/2024/05/lakshman-ji.jpeg"
  },
  {
    name: "Hanuman",
    category: "Ramayana Characters",
    usercount: 0,
    description: "Hanuman, the devoted vanara and servant of Lord Rama, exemplifies devotion, courage, and humility, demonstrating the boundless potential of faith in divine service.",
    image: "https://rukminim2.flixcart.com/image/850/1000/kxnl6kw0/shopsy-poster/m/r/a/medium-hanuman-ji-wall-print-6-poster-on-fine-art-paper-13x19-original-imaga2dhgvwweczv.jpeg?q=90&crop=false"
  },
  {
    name: "Ravana",
    category: "Ramayana Characters",
    usercount: 8,
    description: "Ravana, the ten-headed king of Lanka and a learned scholar, reveals the consequences of unchecked ego and desire, serving as a profound lesson in self-mastery.",
    image: "https://www.amarchitrakatha.com/wp-content/uploads/2020/11/Ravana-Thumbnail-376x272-1.jpg"
  },
  {
    name: "Bharata",
    category: "Ramayana Characters",
    usercount: 7,
    description: "Bharata, the younger brother of Lord Rama, personifies humility and love, showcasing deep respect for dharma and his brother's legacy.",
    image: "https://i0.wp.com/krishnasmercy.com/wp-content/uploads/2020/09/317-1.jpg?resize=204%2C235"
  },
  {
    name: "Shatrughna",
    category: "Ramayana Characters",
    usercount: 6,
    description: "Shatrughna, the youngest brother of Lord Rama, is a symbol of quiet strength and steadfast loyalty to his family.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Satrughna%2C_the_youngest_brother_of_R%C4%81ma..jpg"
  },
  {
    name: "Dasharatha",
    category: "Ramayana Characters",
    usercount: 7,
    description:
      "Dasharatha, the king of Ayodhya and father of Lord Rama, portrays the complexities of duty and the pain of fulfilling dharma at great personal cost.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Dasharatha_give_Payasa_to_his_wives.jpg/250px-Dasharatha_give_Payasa_to_his_wives.jpg"
  },
  {
    name: "Kaikeyi",
    category: "Ramayana Characters",
    usercount: 6,
    description:
      "Kaikeyi, the queen of Ayodhya and mother of Bharata, highlights the duality of human emotions, from devotion to ambition, shaping the epic's pivotal events.",
    image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWIzMzBjNjAwLTRlNmItMTFlZi05ZmFhLWFiNzg5M2FlZWVhYy5qcGc="
  },
  {
    name: "Kausalya",
    category: "Ramayana Characters",
    usercount: 6,
    description:
      "Kausalya, the chief queen of Ayodhya and mother of Lord Rama, represents maternal grace and wisdom, offering unwavering support and love.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2abzpxXwGoMKPwmqlxT3sB-Y1sp8zQqbGyQ&s"
  },
  {
    name: "Sumitra",
    category: "Ramayana Characters",
    usercount: 3,
    description:
      "Sumitra, the queen of Ayodhya and mother of Lakshmana and Shatrughna, embodies selflessness and harmony, guiding her sons to uphold dharma.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxhzs6zBHdM0LqySDMeOiLug37q_MgiXq3g&s"
  },
  {
    name: "Vibhishana",
    category: "Ramayana Characters",
    usercount: 7,
    description:
      "Vibhishana, the noble brother of Ravana, stands as a beacon of righteousness, even amidst the darkness of his kin's actions.",
    image: "https://blog.sagarworld.com/wp-content/uploads/2022/04/RAMAYNA-CHARACTER-Vibheeshan1jpg-184x300.jpg"
  },
  {
    name: "Sugriva",
    category: "Ramayana Characters",
    usercount: 6,
    description:
      "Sugriva, the vanara king and ally of Lord Rama, showcases the importance of alliances and redemption through noble deeds.",
    image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/04/09/Pictures/_6296c446-7a5e-11ea-9ef9-f1be7341055a.jpg"
  },
  {
    name: "Vali",
    category: "Ramayana Characters",
    usercount: 3,
    description:
      "Vali, the elder brother of Sugriva and a mighty warrior, reflects the complexities of strength and justice, ultimately surrendering to divine will.",
    image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/04/09/Pictures/_6296c446-7a5e-11ea-9ef9-f1be7341055a.jpg"
  },
  {
    name: "Jatayu",
    category: "Ramayana Characters",
    usercount: 7,
    description:
      "Jatayu, the noble vulture king, symbolizes sacrifice and the undying spirit of dharma in protecting Sita from Ravana.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6nvgdc8pzVeZ1qWu2VfQ-0SCPWYaN6z9EDbThY7OkxQMQihjs8ZOmdTNy9yC7-13o8M&usqp=CAU"
  },
  {
    name: "Mandodari",
    category: "Ramayana Characters",
    usercount: 6,
    description:
      "Mandodari, the wise and compassionate queen of Ravana, serves as a voice of reason amidst the chaos of Lanka.",
    image: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/191820-rsamvsocfh-1688366351.jpg"
  },
  {
    name: "Indrajit",
    category: "Ramayana Characters",
    usercount: 7,
    description:
      "Indrajit, the valiant son of Ravana, demonstrates unparalleled valor and mastery of warfare, yet succumbs to misplaced loyalty.",
    image: "https://storypick.com/wp-content/uploads/2015/12/INDRAJIT-10.jpg"
  },
  {
    name: "Angada",
    category: "Ramayana Characters",
    usercount: 6,
    description:
      "Angada, the brave son of Vali, represents youthful energy and determination, rallying the vanaras to Lord Rama's cause.",
    image: "https://qph.cf2.quoracdn.net/main-qimg-1d68a5086b4b1ed80edd673639addb32-lq"
  },
  {
    name: "Nala",
    category: "Ramayana Characters",
    usercount: 1,
    description:
      "Nala, the vanara architect, showcases skill and ingenuity in building the great bridge to Lanka, aiding Lord Rama's mission.",
    image: "https://l450v.alamy.com/450v/a66yt9/building-bridge-of-lanka-a66yt9.jpg"
  },
  {
    name: "Nila",
    category: "Ramayana Characters",
    usercount: 1,
    description:
      "Nila, a key vanara leader and builder of the bridge to Lanka, is a testament to teamwork and leadership in divine service.",
    image: "https://l450v.alamy.com/450v/a66yt9/building-bridge-of-lanka-a66yt9.jpg"
  },
  {
    name: "Ahalya",
    category: "Ramayana Characters",
    usercount: 7,
    description:
      "Ahalya, the wife of sage Gautama, symbolizes redemption and forgiveness, as her penance leads to liberation by Lord Rama's grace.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ahalya.jpg"
  },
  {
    name: "Maricha",
    category: "Ramayana Characters",
    usercount: 6,
    description:
      "Maricha, a demon ally of Ravana, takes the form of a golden deer to deceive Sita, reflecting the destructive power of illusion and deceit.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPKO5jqoDNPp-eA2e7QiP3IyUfnxhlG_RQQ&s"
  },
  {
    name: "Surpanakha",
    category: "Ramayana Characters",
    usercount: 3,
    description:
      "Surpanakha, the sister of Ravana, represents uncontrolled desire and its consequences, igniting the chain of events leading to the great conflict.",
    image: "https://franpritchett.com/00routesdata/bce_299_200/ramayana/surpanakha/print1910s2.jpg"
  },
  {
    name: "Kumbhakarna",
    category: "Ramayana Characters",
    usercount: 7,
    description:
      "Kumbhakarna, the mighty brother of Ravana, is a paradox of wisdom and loyalty, whose tragic fate underscores the cost of misplaced devotion.",
    image: "https://i.pinimg.com/736x/82/b9/8e/82b98e5def54987b6e383d769000235e.jpg"
  },
  {
    name: "Manthara",
    category: "Ramayana Characters",
    usercount: 4,
    description:
      "Manthara, the maid of Kaikeyi, embodies the power of manipulation, steering events with her cunning advice that changes Ayodhya's destiny.",
    image: "https://www.tallengestore.com/cdn/shop/products/RamDardarPattabhishekam-RamayanPainting_1524c6c7-bfa0-4d0a-ba2e-8601100bb08b.jpg?v=1692632626"
  },
  {
    name: "Shabari",
    category: "Ramayana Characters",
    usercount: 7,
    description:
      "Shabari, the devoted ascetic, exemplifies the simplicity of love and devotion as she offers fruits to Lord Rama with pure-hearted reverence.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSeBDlAczsd-rVRkEIeGYkCG-vpN2RhqaimOsW-ITlvCauT_fVu4i0VlC-R-18ugrVavs7Mfm63eXqEfcRuSPiCHUDgjulKptB6umvBl0"
  },
  {
    name: "Sampati",
    category: "Ramayana Characters",
    usercount: 6,
    description:
      "Sampati, the elder brother of Jatayu, aids the vanaras with crucial information about Sita, representing the role of wisdom in service to dharma.",
    image: "https://www.tallengestore.com/cdn/shop/products/RamDardarPattabhishekam-RamayanPainting_1524c6c7-bfa0-4d0a-ba2e-8601100bb08b.jpg?v=1692632626"
  },
  {
    name: "Urmila",
    category: "Ramayana Characters",
    usercount: 6,
    description:
      "Urmila, the wife of Lakshmana, embodies silent sacrifice and patience, staying behind in Ayodhya while her husband accompanies Lord Rama.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiM9XVKnY0tLNrnOCihOhgYSvpLPH6TAAGfA&s"
  },
  {
    name: "Tataka",
    category: "Ramayana Characters",
    usercount: 3,
    description:
      "Tataka, a demoness cursed to lose her beauty, symbolizes the destructive forces of nature and the eventual triumph of dharma through her defeat by Rama.",
    image: "https://www.tallengestore.com/cdn/shop/products/RamDardarPattabhishekam-RamayanPainting_1524c6c7-bfa0-4d0a-ba2e-8601100bb08b.jpg?v=1692632626"
  },
  {
    name: "Khara",
    category: "Ramayana Characters",
    usercount: 2,
    description:
      "Khara, Ravana's brother and a powerful rakshasa, represents brute force and arrogance, ultimately vanquished by Lord Rama in a display of divine justice.",
    image: "https://www.tallengestore.com/cdn/shop/products/RamDardarPattabhishekam-RamayanPainting_1524c6c7-bfa0-4d0a-ba2e-8601100bb08b.jpg?v=1692632626"
  },

  // Mahabharata Characters

  {
    name: "Krishna",
    category: "Mahabharata Characters",
    usercount: 0,
    description:
      "Krishna, the divine guide and charioteer of Arjuna, represents cosmic wisdom and the eternal protector of dharma, offering profound teachings in the Bhagavad Gita.",
    image: "https://preview.redd.it/who-would-be-perfect-in-embodying-the-role-of-lord-krishna-v0-nemmxj3rr7pe1.jpeg?width=640&crop=smart&auto=webp&s=b92c05610bf8c8154637266d2d87ca030a62a76b"
  },
  {
    name: "Arjuna",
    category: "Mahabharata Characters",
    usercount: 9,
    description:
      "Arjuna, the Pandava prince and peerless archer, embodies the spiritual seeker guided by Krishna to overcome doubt and fulfill his righteous duty.",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFOFlNgbNvAiA/feedshare-shrink_800/feedshare-shrink_800/0/1687060067952?e=2147483647&v=beta&t=CZqhCwcOigZPqM5AvkmOQ6xJ8CnqASLEbQe4RjISjh4"
  },
  {
    name: "Yudhishthira",
    category: "Mahabharata Characters",
    usercount: 8,
    description:
      "Yudhishthira, the eldest Pandava and son of Dharma, symbolizes steadfast virtue and the moral dilemmas faced in the pursuit of truth.",
    image: "https://static.india.com/wp-content/uploads/2024/12/Mahabharat-Yudhishthira-Ke-Shrap-3.jpg?impolicy=Medium_Widthonly&w=400&h=800"
  },
  {
    name: "Bhima",
    category: "Mahabharata Characters",
    usercount: 8,
    description:
      "Bhima, the mighty Pandava known for his immense strength, represents unyielding loyalty and the power to combat injustice.",
    image: "https://qph.cf2.quoracdn.net/main-qimg-13f93a31f405c3b444eb59c253f8e7e7-lq"
  },
  {
    name: "Nakula",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Nakula, the fourth Pandava and master horseman, exemplifies grace, humility, and unwavering devotion to his brothers.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpO-Uj7zXniRebzu0hm_F1dHE3zcP_IpAKmYM1p9b8y5pFe5KflqGLizZaGB28692MwqQNi_kAqpZO3YRp3N1lp8xw4fHaHeQ5ygR-p_Op2kFHEPgDERBI1jDxcBmH6FovbSZhYFLbsRSw/s640/Nakula%20%282%29.jpg"
  },
  {
    name: "Sahadeva",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Sahadeva, the youngest Pandava, is renowned for his wisdom and knowledge of astrology, embodying quiet intellect and loyalty.",
    image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=736363786533479"
  },
  {
    name: "Draupadi",
    category: "Mahabharata Characters",
    usercount: 9,
    description:
      "Draupadi, the queen of the Pandavas, represents resilience and the divine force that inspires justice and truth in the epic's unfolding drama.",
    image: "https://www.mysticadii.com/wp-content/uploads/2021/01/draupadi.jpg"
  },
  {
    name: "Duryodhana",
    category: "Mahabharata Characters",
    usercount: 8,
    description:
      "Duryodhana, the ambitious Kaurava prince, symbolizes unchecked desire and the tragic consequences of adharma and envy.",
    image: "https://qph.cf2.quoracdn.net/main-qimg-1d68a5086b4b1ed80edd673639addb32-lq"
  },
  {
    name: "Karna",
    category: "Mahabharata Characters",
    usercount: 9,
    description:
      "Karna, the noble warrior and son of the Sun God, embodies the pathos of loyalty and honor amidst the challenges of fate and societal rejection.",
    image: "https://vocal.media/history/day-2-of-karna-parva-the-fall-of-karna-the-arrow-of-fate"
  },
  {
    name: "Bhishma",
    category: "Mahabharata Characters",
    usercount: 9,
    description:
      "Bhishma, the grand patriarch of the Kuru dynasty, exemplifies steadfast duty and sacrifice, holding the epic's moral compass with his wisdom and vows.",
    image: "https://www.mayapurapp.com/wp-content/uploads/2024/08/Bhisma-deva.jpg"
  },
  {
    name: "Dronacharya",
    category: "Mahabharata Characters",
    usercount: 8,
    description:
      "Dronacharya, the revered teacher of the Kuru princes, symbolizes the duality of wisdom and allegiance in a world rife with moral conflict.",
    image: "https://qph.cf2.quoracdn.net/main-qimg-1d68a5086b4b1ed80edd673639addb32-lq"
  },
  {
    name: "Kunti",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Kunti, the mother of the Pandavas, represents the strength of motherhood and the endurance required to uphold dharma amidst personal trials.",
    image: "https://miro.medium.com/v2/resize:fit:960/1*KTvPlKiZ1_KjNFD8_wil9Q.jpeg"
  },
  {
    name: "Gandhari",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Gandhari, the blindfolded queen and mother of the Kauravas, embodies devotion and the profound sorrow of witnessing the consequences of adharma.",
    image: "https://miro.medium.com/v2/resize:fit:960/1*KTvPlKiZ1_KjNFD8_wil9Q.jpeg"
  },
  {
    name: "Shakuni",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Shakuni, the cunning uncle of the Kauravas, represents manipulation and the destructive power of vengeance in shaping destiny.",
    image: "https://www.goodreads.com/book/show/52853901-shakuni---an-oath-for-revenge"
  },
  {
    name: "Abhimanyu",
    category: "Mahabharata Characters",
    usercount: 8,
    description:
      "Abhimanyu, the valiant son of Arjuna, symbolizes youthful heroism and the ultimate sacrifice in the service of dharma.",
    image: "https://timesofindia.indiatimes.com/religion/web-stories/the-great-warrior-abhimanyu-in-mahabharat%2Fphotostory%2F104907965.cms"
  },
  {
    name: "Dhritarashtra",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Dhritarashtra, the blind king of Hastinapur, represents the struggles of attachment and the perils of moral blindness.",
    image: "https://www.newindianexpress.com/magazine/2018/Jan/13/dhritarashtra-and-his-tale-of-grief-1751311.html"
  },
  {
    name: "Pandu",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Pandu, the father of the Pandavas, symbolizes the complexities of duty and the consequences of unintended transgressions.",
    image: "https://blog.sagarworld.com/wp-content/uploads/2022/04/pandu.jpg"
  },
  {
    name: "Madri",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Madri, the second wife of Pandu, represents love and sacrifice, ultimately giving her life to fulfill her role as a devoted mother.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Madri_-_Raja_Ravi_Varma_Print.jpg"
  },
  {
    name: "Vidura",
    category: "Mahabharata Characters",
    usercount: 8,
    description:
      "Vidura, the wise advisor to the Kuru throne, embodies dharma and impartial counsel in the midst of familial strife.",
    image: "https://www.bhaskar.com/jeevan-mantra/dharm/news/mahabharata-and-facts-vidur-viti-for-happy-life-dhritrastra-and-vidur-in-mahabharata-life-management-tips-from-vidur-niti-127181823.html"
  },
  {
    name: "Ashwatthama",
    category: "Mahabharata Characters",
    usercount: 8,
    description:
      "Ashwatthama, the son of Dronacharya, represents the devastating impact of unchecked rage and the complex interplay of fate and free will.",
    image: "https://akellas.org/wp-content/uploads/2023/04/Aswathama-768x442-1.jpeg"
  },
  {
    name: "Dushasana",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Dushasana, the Kaurava prince, is infamous for his role in the disrobing of Draupadi and his unwavering loyalty to Duryodhana.",
    image: "https://thekarmapath.com/wp-content/uploads/2023/06/01.jpg"
  },
  {
    name: "Yuyutsu",
    category: "Mahabharata Characters",
    usercount: 3,
    description:
      "Yuyutsu, a Kaurava defector who joins the Pandavas, symbolizes righteousness in choosing the right side in the battle of Kurukshetra.",
    image: "https://thekarmapath.com/wp-content/uploads/2023/06/01.jpg"
  },
  {
    name: "Uttara",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Uttara, the prince of Matsya, plays a crucial role in the battle of Kurukshetra, particularly through his valiant participation in the war.",
    image: "https://www.imdb.com/title/tt0155322/"
  },
  {
    name: "Subhadra",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Subhadra, the sister of Krishna and wife of Arjuna, embodies love, courage, and devotion as the mother of Abhimanyu.",
    image: "https://gomangala.com/wp-content/uploads/2021/01/Arjuna-and-Subhadra-1024x681.jpg"
  },
  {
    name: "Ghatotkacha",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Ghatotkacha, the son of Bhima and Hidimba, is a fierce warrior known for his incredible strength and magical powers, fighting valiantly in the war.",
    image: "https://en.wikipedia.org/wiki/Ghatotkacha"
  },
  {
    name: "Hidimba",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Hidimba, the demoness who marries Bhima, symbolizes loyalty and maternal love as the mother of Ghatotkacha.",
    image: "https://x.com/VividhaBindu/status/1789501878793121873"
  },
  {
    name: "Jayadratha",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Jayadratha, the king of Sindhu, is known for his role in the death of Abhimanyu, playing a pivotal part in the war's tragic events.",
    image: "https://mahabore.wordpress.com/2013/10/12/the-story-of-jayadratha/"
  },
  {
    name: "Kripacharya",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Kripacharya, the teacher and mentor of both the Kauravas and Pandavas, embodies wisdom and impartiality amidst the unfolding chaos.",
    image: "https://mythlok.b-cdn.net/wp-content/uploads/2023/08/Mythlok-Kripa.jpg"
  },
  {
    name: "Dhrishtadyumna",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Dhrishtadyumna, the son of Drupada, is known for his bravery and leadership, avenging the insult to his sister Draupadi by fighting in the war.",
    image: "https://www.quora.com/In-Mahabharata-who-was-Dhrishtadyumna-What-was-his-role-in-this-great-epic"
  },
  {
    name: "Shikhandi",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Shikhandi, born as a woman and later transformed into a man, plays a pivotal role in Bhishma's death, symbolizing the power of destiny and identity.",
    image: "https://www.instagram.com/siri._draws/p/CelSzyvrpzv/"
  },
  {
    name: "Virata",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Virata, the king of Matsya, provides refuge to the Pandavas during their exile, showcasing his hospitality and honor.",
    image: "https://www.quora.com/In-Mahabharata-who-was-Dhrishtadyumna-What-was-his-role-in-this-great-epic"
  },
  {
    name: "Drupada",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Drupada, the king of Panchala and father of Draupadi and Dhrishtadyumna, represents the themes of revenge, justice, and sacrifice.",
    image: "https://www.quora.com/In-Mahabharata-who-was-Dhrishtadyumna-What-was-his-role-in-this-great-epic"
  },
  {
    name: "Sanjaya",
    category: "Mahabharata Characters",
    usercount: 7,
    description:
      "Sanjaya, the charioteer and advisor to Dhritarashtra, narrates the events of the Kurukshetra war, embodying a voice of reflection and insight.",
    image: "https://www.indianetzone.com/sanjaya_charioteer_maharaja_dhritarashtra"
  },
  {
    name: "Rukmi",
    category: "Mahabharata Characters",
    usercount: 5,
    description:
      "Rukmi, the brother of Subhadra and an adversary of Krishna, represents opposition to the divine and the pride that leads to downfall.",
    image: "https://www.quora.com/How-powerful-was-Rukmi-and-why-did-he-not-participate-in-the-Mahabharata-War"
  },
  {
    name: "Satyaki",
    category: "Mahabharata Characters",
    usercount: 6,
    description:
      "Satyaki, a fierce warrior and devotee of Krishna, is known for his loyalty and valor in the battle of Kurukshetra, particularly for his unwavering defense of the Pandavas.",
    image: "https://www.instagram.com/mysutradhar/p/C0I-K_qSOoO/"
  },

  // Deities and Sages

  {
    name: "Lord Vishnu",
    category: "Deities",
    usercount: 0,
    description:
      "Lord Vishnu, the protector and preserver of the universe, embodies divine compassion and justice, ensuring balance in the cosmic order.",
    image: "https://www.templepurohit.com/wp-content/uploads/2015/07/Lord-Vishnu-Hindu-Gods-and-Deities.jpg"
  },
  {
    name: "Lord Shiva",
    category: "Deities",
    usercount: 0,
    description:
      "Lord Shiva, the destroyer and transformer, represents the power of destruction to create renewal, symbolizing ultimate truth and the path to spiritual liberation.",
    image: "https://hindugallery.com/lord-shiva-images/"
  },
  {
    name: "Lord Brahma",
    category: "Deities",
    usercount: 0,
    description:
      "Lord Brahma, the creator, is the embodiment of cosmic creativity, responsible for the creation of the universe and its preservation through his divine wisdom.",
    image: "https://timeslife.com/thumb/117563650.cms?imgsize=37896&width=616&resizemode=4"
  },
  {
    name: "Goddess Lakshmi",
    category: "Deities",
    usercount: 0,
    description:
      "Goddess Lakshmi, the goddess of wealth and prosperity, brings abundance, both material and spiritual, and is a symbol of purity, fortune, and well-being.",
    image: "https://in.pinterest.com/pin/727331408567160103/"
  },
  {
    name: "Goddess Parvati",
    category: "Deities",
    usercount: 0,
    description:
      "Goddess Parvati, the mother goddess, embodies love, fertility, and devotion, standing as the perfect balance of strength, beauty, and nurturing energy.",
    image: "https://timesofindia.indiatimes.com/religion/web-stories/worship-goddess-parvati-by-offering-these-things/photostory/101830691.cms"
  },
  {
    name: "Narada Muni",
    category: "Sages",
    usercount: 8,
    description:
      "Narada Muni, the divine sage and celestial musician, is known for spreading knowledge and devotion, playing a pivotal role in the unfolding of cosmic events through his wisdom.",
    image: "https://en.wikipedia.org/wiki/Narada"
  },
  {
    name: "Prahlada",
    category: "Puranic Characters",
    usercount: 7,
    description:
      "Prahlada, a devout child and a symbol of unwavering faith, stood firm against his father's tyranny, illustrating the power of devotion to Lord Vishnu.",
    image: "http://appmithistories.blogspot.com/2012/11/bhakta-prahallada.html"
  },
  {
    name: "Dhruva",
    category: "Puranic Characters",
    usercount: 7,
    description:
      "Dhruva, a young prince who meditated with unwavering devotion, attained eternal status in the heavens, symbolizing the strength of perseverance and faith.",
    image: "https://www.templepurohit.com/the-story-of-dhruva/"
  },
  {
    name: "Markandeya",
    category: "Sages",
    usercount: 7,
    description:
      "Markandeya, the eternal sage, is revered for his profound devotion and longevity, having been granted the boon of immortality by Lord Shiva.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQXoJr8JY49nLyiCAFl4so_bnihVIxu8kGRIZcpVplAYlHjaAYU9pDpXjQy1gqPPghnErSpXyIStk5czAQBE3yw5QdG_TI_kzZt5dYJvfb86sZ6F5jD7xftkIk6GHlKisMylUrDk-sE8-X%2Fs1600%2FSage%2BMarkandeya.jpg"
  },

  // Temples

  {
    name: "Tirupati Balaji Temple",
    category: "Temples",
    usercount: 0,
    description:
      "Tirupati Balaji Temple, located in Andhra Pradesh, is dedicated to Lord Venkateswara, a form of Lord Vishnu. It is one of the most visited pilgrimage sites in India, known for its divine blessings and magnificent architecture.",
    image: "https://www.punekarnews.in/wp-content/uploads/2020/09/Triputi-Balaji-Temple.jpg"
  },
  {
    name: "Varanasi Temples",
    category: "Temples",
    usercount: 9,
    description:
      "The temples in Varanasi, especially the Kashi Vishwanath Temple, are deeply revered, with the city being a major spiritual center for Hindus. Varanasi is considered the city of Lord Shiva, offering devotees a chance to seek moksha.",
    image: "https://www.tourmyindia.com/blog/wp-content/uploads/2023/02/Varanasi-Religious-Tourism-Popular-Temples-to-Visit-in-Varanasi.jpg"
  },
  {
    name: "Somnath Temple",
    category: "Temples",
    usercount: 9,
    description:
      "Somnath Temple in Gujarat is one of the twelve Jyotirlingas dedicated to Lord Shiva. It is renowned for its ancient heritage, resilience, and the divine energy that attracts thousands of pilgrims each year.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Somanath_Temple.jpg/500px-Somanath_Temple.jpg"
  },
  {
    name: "Meenakshi Temple",
    category: "Temples",
    usercount: 8,
    description:
      "Meenakshi Temple in Madurai, dedicated to Goddess Meenakshi and Lord Sundareswarar, is an architectural marvel. It is famous for its towering gopurams, intricate sculptures, and vibrant rituals.",
    image: "https://www.nationalgeographic.com/travel/article/meenakshi-amman-hindu-temple"
  },
  {
    name: "Konark Sun Temple",
    category: "Temples",
    usercount: 8,
    description:
      "Konark Sun Temple in Odisha is dedicated to the Sun God, Surya. The temple is an iconic example of Kalinga architecture and is known for its chariot-shaped structure and UNESCO World Heritage status.",
    image: "https://www.cntraveller.in/story/this-sun-temple-in-odisha-tells-you-what-time-it-is/"
  },
  {
    name: "Kedarnath Temple",
    category: "Temples",
    usercount: 9,
    description:
      "Kedarnath Temple, located in the Uttarakhand Himalayas, is dedicated to Lord Shiva. It is one of the twelve Jyotirlingas and an important site in the Char Dham Yatra, surrounded by breathtaking views of the snow-clad mountains.",
    image: "https://en.wikipedia.org/wiki/Kedarnath_Temple"
  },
  {
    name: "Badrinath Temple",
    category: "Temples",
    usercount: 9,
    description:
      "Badrinath Temple, also in Uttarakhand, is dedicated to Lord Vishnu. It is a key site in the Char Dham Yatra and stands amidst the picturesque landscapes of the Himalayas, revered for its spiritual significance and serene environment.",
    image: "https://www.chardham-pilgrimage-tour.com/sri-badrinath.html"
  },
  {
    name: "Jagannath Puri Temple",
    category: "Temples",
    usercount: 9,
    description:
      "Jagannath Puri Temple, located in Odisha, is dedicated to Lord Jagannath, a form of Lord Krishna. The temple is famous for the annual Rath Yatra (chariot festival) and is a major pilgrimage destination for Hindus.",
    image: "https://bhubaneswartourism.in/shree-jagannath-temple-puri"
  },

  // Festivals

  {
    name: "Diwali",
    category: "Festivals",
    usercount: 0,
    description:
      "Diwali, also known as the Festival of Lights, is one of the most important festivals in India. It celebrates the victory of light over darkness and good over evil, with families lighting lamps, bursting fireworks, and sharing sweets.",
    image: "https://audentiaspace.com/10-diwali-decoration-ideas-for-home-you-cant-miss-this-festive-season/"
  },
  {
    name: "Holi",
    category: "Festivals",
    usercount: 9,
    description:
      "Holi, the Festival of Colors, is a joyous celebration marking the arrival of spring. It is a time for people to throw colored powder at each other, sing, dance, and celebrate with family and friends, symbolizing the triumph of good over evil.",
    image: "https://www.britannica.com/story/holi-festival-of-colors"
  },
  {
    name: "Navaratri",
    category: "Festivals",
    usercount: 9,
    description:
      "Navaratri is a nine-night festival dedicated to the worship of Goddess Durga. It is celebrated with fasting, prayer, and traditional dance forms like Garba and Dandiya, culminating in Vijayadashami or Dussehra.",
    image: "https://www.tiktok.com/discover/what-is-navratri"
  },
  {
    name: "Janmashtami",
    category: "Festivals",
    usercount: 9,
    description:
      "Janmashtami celebrates the birth of Lord Krishna, one of the most beloved deities in Hinduism. Devotees observe fasting, recite prayers, and reenact episodes from Krishna's life, especially his childhood exploits.",
    image: "https://www.youtube.com/watch?v=VC7dFM1xKT4"
  },
  {
    name: "Maha Shivratri",
    category: "Festivals",
    usercount: 8,
    description:
      "Maha Shivratri is a significant festival dedicated to Lord Shiva. Devotees fast, chant mantras, and offer prayers to seek blessings for prosperity and spiritual growth, while observing night-long vigils.",
    image: "https://timesofindia.indiatimes.com/life-style/food-news/importance-of-milk-in-maha-shivaratri-and-5-dishes-that-you-can-prepare-with-it/photostory/68219479.cms"
  },
  {
    name: "Ganesh Chaturthi",
    category: "Festivals",
    usercount: 8,
    description:
      "Ganesh Chaturthi marks the birth of Lord Ganesha, the remover of obstacles. This festival is celebrated with grand processions, idol installations, prayers, and the immersion of the idols in water, symbolizing the cycle of life and renewal.",
    image: "https://in.pinterest.com/pin/ganesh-chaturthi-festival-is-celebrated-in-honor-of-the-lord-ganesha-the-god-of-beginnings-and-wisd--386394843006050072/"
  },
  {
    name: "Ram Navami",
    category: "Festivals",
    usercount: 8,
    description:
      "Ram Navami celebrates the birth of Lord Rama, the hero of the Ramayana. It is observed with prayers, processions, and recitations of the Ramayana, highlighting Rama's virtues of righteousness and virtue.",
    image: "https://ommcomnews.com/odisha-news/ram-navami-being-celebrated-with-pomp-gaiety-across-odisha/"
  },
  {
    name: "Karwa Chauth",
    category: "Festivals",
    usercount: 7,
    description:
      "Karwa Chauth is a fasting ritual observed by married Hindu women for the well-being and longevity of their husbands. Women fast from sunrise to moonrise, praying for their husband's health and prosperity.",
    image: "https://www.jagranjosh.com/general-knowledge/how-is-karva-chauth-celebrated-in-different-parts-of-india-1729411416-1"
  },

  // Philosophy advita vedanta

  {
    name: "Advaita Vedanta",
    category: "Philosophy",
    usercount: 9,
    description:
      "Advaita Vedanta is a non-dualistic school of Hindu philosophy that teaches the oneness of the individual soul (Atman) with the Supreme Reality (Brahman). It emphasizes the idea that the ultimate truth is beyond perception and intellectual understanding.",
    image: "https://www.hinduwebsite.com/hinduism/images/adi-shankaracharya.jpg"
  },
  {
    name: "Dvaita Vedanta",
    category: "Philosophy",
    usercount: 8,
    description:
      "Dvaita Vedanta, or dualism, posits a clear distinction between the individual soul (Atman) and the Supreme Being (Brahman). It teaches that the two are eternally separate and emphasizes devotion (bhakti) to the personal god.",
    image: "https://www.hinduwebsite.com/hinduism/images/adi-shankaracharya.jpg"
  },
  {
    name: "Vishishtadvaita",
    category: "Philosophy",
    usercount: 8,
    description:
      "Vishishtadvaita, or qualified non-dualism, believes that while Brahman is the ultimate reality, it manifests in various forms. It teaches that individual souls are distinct but dependent on Brahman, and their union with Brahman is the goal.",
    image: "https://www.hinduwebsite.com/hinduism/images/adi-shankaracharya.jpg"
  },
  {
    name: "Samkhya",
    category: "Philosophy",
    usercount: 7,
    description:
      "Samkhya is one of the oldest Indian philosophical systems, focusing on the enumeration of the elements of existence. It posits that the universe is composed of two eternal realities: Purusha (consciousness) and Prakriti (nature), and liberation is attained by realizing the distinction between them.",
    image: "https://www.hinduwebsite.com/hinduism/images/adi-shankaracharya.jpg"
  },
  {
    name: "Yoga Philosophy",
    category: "Philosophy",
    usercount: 9,
    description:
      "Yoga philosophy emphasizes the importance of mental discipline, self-control, and meditation to achieve spiritual awakening. It aims for the union of the individual soul (Atman) with the supreme soul (Brahman), often outlined in the Yoga Sutras of Patanjali.",
    image: "https://www.oceans7ashwem.com/images/yoga.jpg"
  },
  {
    name: "Nyaya",
    category: "Philosophy",
    usercount: 7,
    description:
      "Nyaya is a school of logic and epistemology that focuses on the methods of acquiring knowledge. It emphasizes reasoning, evidence, and debate to understand the nature of reality and how to attain valid knowledge.",
    image: "https://www.oceans7ashwem.com/images/yoga.jpg"
  },
  {
    name: "Vaisheshika",
    category: "Philosophy",
    usercount: 7,
    description:
      "Vaisheshika is a system of philosophy that seeks to explain the nature of the physical world through a system of categories, focusing on the atomic composition of matter and the principles of cause and effect.",
    image: "https://www.oceans7ashwem.com/images/yoga.jpg"
  },
  {
    name: "Mimamsa",
    category: "Philosophy",
    usercount: 7,
    description:
      "Mimamsa is an early school of Indian philosophy that focuses on the interpretation of sacred texts, particularly the Vedas. It emphasizes ritual actions and the proper performance of duties as a means of achieving liberation.",
    image: "https://www.oceans7ashwem.com/images/yoga.jpg"
  },

  // More Deities

  {
    name: "Lord Ganesha",
    category: "Deities",
    usercount: 0,
    description:
      "Lord Ganesha, the elephant-headed god, is widely revered as the remover of obstacles, the god of wisdom, and the patron of arts and sciences. His image is found in almost every Hindu household.",
    image: "https://rukminim3.flixcart.com/image/850/1000/kjiwfbk0-0/book/6/m/g/ganesh-original-imafz2qtnxbherfh.jpeg?q=90&crop=false"
  },
  {
    name: "Lord Hanuman",
    category: "Deities",
    usercount: 0,
    description:
      "Lord Hanuman is a central figure in the Ramayana, known for his devotion to Lord Rama, strength, and courage. He is considered the embodiment of loyalty, devotion, and selfless service.",
    image: "https://5.imimg.com/data5/ANDROID/Default/2021/9/QN/ZH/DE/13910760/product-jpeg.jpg"
  },
  {
    name: "Goddess Saraswati",
    category: "Deities",
    usercount: 0,
    description:
      "Goddess Saraswati is the goddess of wisdom, knowledge, music, and arts. She is often depicted playing the veena and is worshipped by students, artists, and scholars for learning and success.",
    image: "https://hindugallery.com/hindu-goddess-saraswati-image.jpg"
  },
  {
    name: "Goddess Durga",
    category: "Deities",
    usercount: 0,
    description:
      "Goddess Durga is the warrior goddess, symbolizing power, strength, and protection. She is depicted riding a lion or tiger and is revered for her ability to protect the righteous from evil forces.",
    image: "https://phool.co/blogs/festivalstraditions/what-is-the-mantra-of-durga-and-how-can-it-transform-your-life"
  },
  {
    name: "Goddess Kali",
    category: "Deities",
    usercount: 0,
    description:
      "Goddess Kali is the fierce, dark goddess who represents destruction and transformation. She is worshipped for her power to destroy negative forces and liberate souls from the cycle of birth and death.",
    image: "https://www.tallengestore.com/cdn/shop/products/Indian_Art_-_Dutch_Bengal_School_-Kali_-_19_Century_f828c4c9-db2b-4d3f-927f-361b0474179b.jpg?v=1568994269"
  },
  {
    name: "Lord Kartikeya",
    category: "Deities",
    usercount: 9,
    description:
      "Lord Kartikeya is the god of war, the son of Lord Shiva and Goddess Parvati. He is depicted with six faces, symbolizing his omniscience, and is revered by devotees for his bravery and leadership.",
    image: "https://www.poojn.in/wp-content/uploads/2024/06/Kartikeya-poojn.jpg"
  },
  {
    name: "Lord Surya",
    category: "Deities",
    usercount: 9,
    description:
      "Lord Surya, the Sun god, is a vital deity in Hinduism. He represents health, life, and energy, and is worshipped to seek blessings for prosperity, good health, and success.",
    image: "https://www.artfactory.in/product/712/Spiritual-Lord-Surya-Painting"
  },
  {
    name: "Lord Indra",
    category: "Deities",
    usercount: 8,
    description:
      "Lord Indra is the king of the gods and the ruler of the heavens. He is associated with rain, storms, and thunder, and is worshipped for his ability to bring prosperity and remove obstacles.",
    image: "https://wordzz.com/lord-indra-the-king-of-swarg/"
  },

  // Sacred Texts

  {
    name: "Yoga Sutras",
    category: "Sacred Texts",
    usercount: 8,
    description:
      "The Yoga Sutras of Patanjali are a collection of aphorisms that outline the practice and philosophy of yoga. They offer guidance on meditation, ethical conduct, and achieving mental clarity and spiritual awakening.",
    image: "https://patanjaliyogasutra.in/wp-content/themes/yogsutra/images/desktop-banner-cu.jpg"
  },
  {
    name: "Brahma Sutras",
    category: "Sacred Texts",
    usercount: 8,
    description:
      "The Brahma Sutras are a foundational text of Vedanta philosophy. They systematically address the nature of Brahman (the ultimate reality) and the relationship between the individual soul (Atman) and Brahman.",
    image: "https://patanjaliyogasutra.in/wp-content/themes/yogsutra/images/desktop-banner-cu.jpg"
  },
  {
    name: "Vishnu Purana",
    category: ["Sacred Texts","Purana"],
    usercount: 7,
    description:
      "The Vishnu Purana is one of the eighteen Mahāpurāṇas, dedicated to the god Vishnu. It contains stories of creation, genealogies of gods and sages, and teachings on the nature of the divine, dharma, and cosmology.",
    image: "https://m.media-amazon.com/images/I/71LOr2Uj0mL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Shiva Purana",
    category: ["Sacred Texts","Purana"],
    usercount: 7,
    description:
      "The Shiva Purana is a major text of Hinduism devoted to Lord Shiva. It contains stories of his cosmic creation, destruction, and regeneration, as well as hymns and teachings on spiritual practices.",
    image: "https://m.media-amazon.com/images/I/81R2oHF8lzL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Garuda Purana",
    category: ["Sacred Texts","Purana"],
    usercount: 7,
    description:
      "The Garuda Purana is a text that consists of mythological stories and teachings, focusing on Lord Vishnu, particularly in his incarnation as Garuda. It contains esoteric knowledge about life, death, and afterlife.",
    image: "https://m.media-amazon.com/images/I/815NA1CxQ3L._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Bhagavata Purana",
    category: ["Sacred Texts","Purana"],
    usercount: 8,
    description:
      "The Bhagavata Purana is one of the most important texts in Hinduism, focusing on the life and teachings of Lord Vishnu, particularly in his incarnation as Krishna. It is revered for its stories of devotion, cosmology, and the path to liberation.",
    image: "https://upload.wikimedia.org/wikipedia/hi/6/66/%E0%A4%AD%E0%A4%BE%E0%A4%97%E0%A4%B5%E0%A4%A4.gif"
  },

  // Famous Sages

  {
    name: "Valmiki",
    category: "Sages",
    usercount: 9,
    description:
      "Valmiki is regarded as the author of the epic Ramayana, one of the greatest Hindu epics. He is known as the Adi Kavi (first poet), and his work has profoundly influenced Indian literature and culture.",
    image: "https://www.bhagavatam-katha.com/wp-content/uploads/2015/03/Valmiki.jpg"
  },
  {
    name: "Vyasa",
    category: "Sages",
    usercount: 9,
    description:
      "Vyasa, also known as Vedavyasa, is credited with composing the Mahabharata and compiling the Vedas. He is a central figure in Hindu tradition, regarded as a sage who structured the sacred texts of Hinduism.",
    image: "https://nilus.in/Demo/SatyaSandBox/templates/yootheme/cache/1a/vyasa20Jan-1a127b90.jpeg"
  },
  {
    name: "Vasishtha",
    category: "Sages",
    usercount: 8,
    description:
      "Vasishtha is one of the seven great sages (Saptarishi) in Hindu tradition. He is known for his wisdom and role as a teacher and advisor to many kings, as well as his teachings on the nature of reality and self-realization.",
    image: "https://glorioushinduism.com/2021/01/25/vashishta-the-rishi-of-three-lifetimes/"
  },
  {
    name: "Vishwamitra",
    category: "Sages",
    usercount: 8,
    description:
      "Vishwamitra is a revered sage known for his rigorous penance and asceticism. He is famous for his creation of the Gayatri mantra and his role in the Ramayana, where he is both a mentor to Lord Rama and a key figure in Vedic mythology.",
    image: "https://mysticalbee.com/teachings-of-vishwamitra-maharshi/"
  },
  {
    name: "Agastya",
    category: "Sages",
    usercount: 7,
    description:
      "Agastya is a sage in Hindu mythology credited with composing hymns in the Rigveda. He is a revered figure for his wisdom and his role in spreading Vedic knowledge and rituals across the southern parts of India.",
    image: "https://www.shutterstock.com/shutterstock/photos/1349641991/display_1500/stock-photo-agathiyar-image-of-the-renowned-sage-agastya-holding-a-water-pot-1349641991.jpg"
  },
  {
    name: "Patanjali",
    category: "Sages",
    usercount: 8,
    description:
      "Patanjali is an ancient sage and the author of the Yoga Sutras, which form the foundation of the practice of yoga. He is also associated with the compilation of Sanskrit grammar in the form of the 'Mahabhashya'.",
    image: "https://www.hellomyyoga.com/blog/maharishi-patanjali/"
  },
  {
    name: "Adi Shankaracharya",
    category: "Sages",
    usercount: 9,
    description:
      "Adi Shankaracharya was an influential philosopher and theologian who consolidated the doctrine of Advaita Vedanta. His teachings emphasized non-duality and the idea that the ultimate reality is one and indivisible.",
    image: "https://trueindology.com/wp-content/uploads/2015/03/1-1.jpg"
  },

  // Sacred Places
  {
    name: "Varanasi",
    category: "Sacred Places",
    usercount: 0,
    description:
      "Varanasi, also known as Kashi, is one of the oldest continuously inhabited cities in the world. It is considered the holiest city in Hinduism, with thousands of temples, ghats, and the famous Kashi Vishwanath Temple.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/dashashwamedh-ghat-varanasi-uttar-pradesh-city-hero?qlt=82&ts=1726649273578"
  },
  {
    name: "Mathura",
    category: "Sacred Places",
    usercount: 9,
    description:
      "Mathura is the birthplace of Lord Krishna, one of the most revered deities in Hinduism. It is known for its temples, including the Shri Krishna Janmabhoomi Temple, and for its historical and religious significance.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Vishram_Ghat.jpg",
  },
  {
    name: "Vrindavan",
    category: "Sacred Places",
    usercount: 9,
    description:
      "Vrindavan is a town closely associated with the life of Lord Krishna, particularly his youth and his interactions with the gopis (female devotees). It is a major pilgrimage destination with temples, ghats, and lush gardens.",
    image: "https://static.toiimg.com/photo/msid-86454434/width-96/height-65.cms",
  },
  {
    name: "Haridwar",
    category: "Sacred Places",
    usercount: 9,
    description:
      "Haridwar is a major pilgrimage city in Uttarakhand, known for the Har Ki Pauri ghat, where devotees take a holy dip in the Ganges River to cleanse their sins. It is one of the seven holiest places in Hinduism.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/birla-ghat-haridwar-uttarakhand-2-musthead-hero",
  },
  {
    name: "Rishikesh",
    category: "Sacred Places",
    usercount: 8,
    description:
      "Rishikesh, known as the 'Yoga Capital of the World,' is a spiritual center and a gateway to the Himalayas. It is famous for its ashrams, yoga retreats, and the iconic Lakshman Jhula bridge over the Ganges.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-triveni-ghat-rishikesh-uttarakhand-2-city-hero",
  },
  {
    name: "Ayodhya",
    category: "Sacred Places",
    usercount: 9,
    description:
      "Ayodhya is the birthplace of Lord Rama and is one of the most significant religious sites in India. The city is known for the Ram Janmabhoomi Temple, dedicated to Lord Rama, and its rich history in Hindu mythology.",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/Ayodhya-Aug17-1_1200.jpeg",
  },
  {
    name: "Dwarka",
    category: "Sacred Places",
    usercount: 8,
    description:
      "Dwarka, an ancient city mentioned in the Mahabharata, is associated with Lord Krishna. It is one of the Char Dham pilgrimage sites and is famous for the Dwarkadhish Temple, which is dedicated to Krishna.",
    image: "https://www.daiwikhotels.com/about-dwarka/dwarka/",
  },

  // Concepts

  {
    name: "Karma",
    category: "Concepts",
    usercount: 9,
    description: "Karma refers to the principle of cause and effect in Hinduism, where a person's actions (good or bad) influence their future experiences. It is central to the belief in the cycle of birth, death, and rebirth.",
    image: "https://www.shreepublishers.com/image/cache/data/new_images/2019/current/9788193910450-500x702.jpg"
  },
  {
    name: "Dharma",
    category: "Concepts",
    usercount: 9,
    description: "Dharma represents the moral law, duty, and righteousness in Hinduism. It is the path of living ethically and in harmony with the universe, encompassing duties, rights, laws, and justice.",
    image: "https://www.shreepublishers.com/image/cache/data/new_images/2019/current/9788193910450-500x702.jpg"
  },
  {
    name: "Moksha",
    category: "Concepts",
    usercount: 9,
    description: "Moksha is the ultimate goal in Hinduism, representing liberation from the cycle of birth, death, and rebirth (samsara). It is achieved through self-realization, knowledge, and the realization of oneness with the divine.",
    image: "https://www.shreepublishers.com/image/cache/data/new_images/2019/current/9788193910450-500x702.jpg"
  },
  {
    name: "Reincarnation",
    category: "Concepts",
    usercount: 8,
    description: "Reincarnation is the belief that after death, the soul is reborn in a new body. It is a fundamental concept in Hinduism, suggesting that life is a continuous cycle of birth, death, and rebirth.",
    image: "https://www.shreepublishers.com/image/cache/data/new_images/2019/current/9788193910450-500x702.jpg"
  },
  {
    name: "Yoga",
    category: "Concepts",
    usercount: 9,
    description: "Yoga is a spiritual and physical discipline aimed at uniting the body, mind, and soul. It encompasses various practices, including meditation, postures (asanas), and breathing exercises, to achieve spiritual growth and mental peace.",
    image: "https://www.financialexpress.com/wp-content/uploads/2022/06/international-yoga-day-pivvvvvvv.jpg"
  },
  {
    name: "Meditation",
    category: "Concepts",
    usercount: 8,
    description: "Meditation is a practice of focusing the mind to achieve mental clarity, spiritual insight, and inner peace. It is a key aspect of spiritual practices in Hinduism, used to connect with the divine and attain self-realization.",
    image: "https://hallow.com/wp-content/uploads/2019/04/indian-yogi-yogi-madhav-727510-unsplash.jpg"
  },
  {
    name: "Ahimsa",
    category: "Concepts",
    usercount: 8,
    description: "Ahimsa refers to non-violence or the principle of not causing harm to any living being, whether through thought, word, or action. It is a core value in Hinduism, Buddhism, and Jainism.",
    image: "https://hallow.com/wp-content/uploads/2019/04/indian-yogi-yogi-madhav-727510-unsplash.jpg"
  },
  {
    name: "Satya",
    category: "Concepts",
    usercount: 8,
    description: "Satya means truthfulness or the pursuit of truth. It encourages honest living and is considered an important virtue in Hindu philosophy, guiding individuals to act in alignment with reality and justice.",
    image: "https://hallow.com/wp-content/uploads/2019/04/indian-yogi-yogi-madhav-727510-unsplash.jpg"
  }
];

module.exports = topics;
