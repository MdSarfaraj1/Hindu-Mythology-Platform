const topics = [
    // Sacred Texts
        { 
            name: "Vedas", 
            category: "Sacred Texts", 
            ratings: "4.9", 
            description: "The Vedas are the eternal source of wisdom, unveiling the divine mysteries of existence and guiding humanity towards truth and enlightenment." 
        },
        { 
            name: "Upanishad", 
            category: "Sacred Texts", 
            ratings: "4.8", 
            description: "The Upanishads delve into profound philosophical truths, bridging the soul’s journey from ignorance to supreme self-realization." 
        },
        { 
            name: "Bhagavad Gita", 
            category: "Sacred Texts", 
            ratings: "5.0", 
            description: "The Bhagavad Gita is the song of the Divine, offering timeless guidance on duty, devotion, and the path to liberation amidst life’s battles." 
        },
        { 
            name: "Puranas", 
            category: "Sacred Texts", 
            ratings: "4.7", 
            description: "The Puranas weave enchanting tales of creation, preservation, and the cosmic dance of the divine, connecting the eternal with the mortal." 
        },
   
    
    // Epics
   
        { 
            name: "Mahabharata", 
            category: "Epics", 
            ratings: "4.9", 
            description: "The Mahabharata is the grand tapestry of life, revealing the eternal struggles of duty, morality, and dharma in the complex fabric of human relationships." 
        },
        { 
            name: "Ramayana", 
            category: "Epics", 
            ratings: "4.9", 
            description: "The Ramayana is the sacred tale of virtue, devotion, and the triumph of dharma, epitomized by Lord Rama's unwavering commitment to righteousness." 
        },
        { 
            name: "Temples History", 
            category: "History", 
            ratings: "4.6", 
            description: "The history of temples is the chronicle of devotion etched in stone, embodying the spiritual aspirations and cultural artistry of countless generations." 
        },
        { 
            name: "Hindu Philosophy", 
            category: "Philosophy", 
            ratings: "4.8", 
            description: "Hindu philosophy offers a profound inquiry into the nature of existence, guiding the seeker from illusion to the realization of ultimate truth and unity." 
        },

    

    // Ramayana Characters
        { 
            name: "Lord Rama", 
            category: "Ramayana Characters", 
            ratings: "5.0", 
            description: "Lord Rama, the prince of Ayodhya and an avatar of Lord Vishnu, embodies dharma and virtue, guiding humanity with his unwavering righteousness and deep compassion." 
        },
        { 
            name: "Sita", 
            category: "Ramayana Characters", 
            ratings: "5.0", 
            description: "Sita, the wife of Lord Rama and the daughter of King Janaka, is the epitome of purity, devotion, and strength, showcasing unwavering resilience in the face of trials." 
        },
        { 
            name: "Lakshmana", 
            category: "Ramayana Characters", 
            ratings: "4.9", 
            description: "Lakshmana, the loyal brother of Lord Rama, symbolizes loyalty and selfless service, standing by him through every challenge." 
        },
        { 
            name: "Hanuman", 
            category: "Ramayana Characters", 
            ratings: "5.0", 
            description: "Hanuman, the devoted vanara and servant of Lord Rama, exemplifies devotion, courage, and humility, demonstrating the boundless potential of faith in divine service." 
        },
        { 
            name: "Ravana", 
            category: "Ramayana Characters", 
            ratings: "4.8", 
            description: "Ravana, the ten-headed king of Lanka and a learned scholar, reveals the consequences of unchecked ego and desire, serving as a profound lesson in self-mastery." 
        },
        { 
            name: "Bharata", 
            category: "Ramayana Characters", 
            ratings: "4.7", 
            description: "Bharata, the younger brother of Lord Rama, personifies humility and love, showcasing deep respect for dharma and his brother's legacy." 
        },
        { 
            name: "Shatrughna", 
            category: "Ramayana Characters", 
            ratings: "4.6", 
            description: "Shatrughna, the youngest brother of Lord Rama, is a symbol of quiet strength and steadfast loyalty to his family." 
        },
        { 
            name: "Dasharatha", 
            category: "Ramayana Characters", 
            ratings: "4.7", 
            description: "Dasharatha, the king of Ayodhya and father of Lord Rama, portrays the complexities of duty and the pain of fulfilling dharma at great personal cost." 
        },
        { 
            name: "Kaikeyi", 
            category: "Ramayana Characters", 
            ratings: "4.6", 
            description: "Kaikeyi, the queen of Ayodhya and mother of Bharata, highlights the duality of human emotions, from devotion to ambition, shaping the epic's pivotal events." 
        },
        { 
            name: "Kausalya", 
            category: "Ramayana Characters", 
            ratings: "4.6", 
            description: "Kausalya, the chief queen of Ayodhya and mother of Lord Rama, represents maternal grace and wisdom, offering unwavering support and love." 
        },
        { 
            name: "Sumitra", 
            category: "Ramayana Characters", 
            ratings: "4.5", 
            description: "Sumitra, the queen of Ayodhya and mother of Lakshmana and Shatrughna, embodies selflessness and harmony, guiding her sons to uphold dharma." 
        },
        { 
            name: "Vibhishana", 
            category: "Ramayana Characters", 
            ratings: "4.7", 
            description: "Vibhishana, the noble brother of Ravana, stands as a beacon of righteousness, even amidst the darkness of his kin’s actions." 
        },
        { 
            name: "Sugriva", 
            category: "Ramayana Characters", 
            ratings: "4.6", 
            description: "Sugriva, the vanara king and ally of Lord Rama, showcases the importance of alliances and redemption through noble deeds." 
        },
        { 
            name: "Vali", 
            category: "Ramayana Characters", 
            ratings: "4.5", 
            description: "Vali, the elder brother of Sugriva and a mighty warrior, reflects the complexities of strength and justice, ultimately surrendering to divine will." 
        },
        { 
            name: "Jatayu", 
            category: "Ramayana Characters", 
            ratings: "4.7", 
            description: "Jatayu, the noble vulture king, symbolizes sacrifice and the undying spirit of dharma in protecting Sita from Ravana." 
        },
        { 
            name: "Mandodari", 
            category: "Ramayana Characters", 
            ratings: "4.6", 
            description: "Mandodari, the wise and compassionate queen of Ravana, serves as a voice of reason amidst the chaos of Lanka." 
        },
        { 
            name: "Indrajit", 
            category: "Ramayana Characters", 
            ratings: "4.7", 
            description: "Indrajit, the valiant son of Ravana, demonstrates unparalleled valor and mastery of warfare, yet succumbs to misplaced loyalty." 
        },
        { 
            name: "Angada", 
            category: "Ramayana Characters", 
            ratings: "4.6", 
            description: "Angada, the brave son of Vali, represents youthful energy and determination, rallying the vanaras to Lord Rama's cause." 
        },
        { 
            name: "Nala", 
            category: "Ramayana Characters", 
            ratings: "4.5", 
            description: "Nala, the vanara architect, showcases skill and ingenuity in building the great bridge to Lanka, aiding Lord Rama's mission." 
        },
        { 
            name: "Nila", 
            category: "Ramayana Characters", 
            ratings: "4.5", 
            description: "Nila, a key vanara leader and builder of the bridge to Lanka, is a testament to teamwork and leadership in divine service." 
        },
            { 
                name: "Ahalya", 
                category: "Ramayana Characters", 
                ratings: "4.7", 
                description: "Ahalya, the wife of sage Gautama, symbolizes redemption and forgiveness, as her penance leads to liberation by Lord Rama's grace." 
            },
            { 
                name: "Maricha", 
                category: "Ramayana Characters", 
                ratings: "4.6", 
                description: "Maricha, a demon ally of Ravana, takes the form of a golden deer to deceive Sita, reflecting the destructive power of illusion and deceit." 
            },
            { 
                name: "Surpanakha", 
                category: "Ramayana Characters", 
                ratings: "4.5", 
                description: "Surpanakha, the sister of Ravana, represents uncontrolled desire and its consequences, igniting the chain of events leading to the great conflict." 
            },
            { 
                name: "Kumbhakarna", 
                category: "Ramayana Characters", 
                ratings: "4.7", 
                description: "Kumbhakarna, the mighty brother of Ravana, is a paradox of wisdom and loyalty, whose tragic fate underscores the cost of misplaced devotion." 
            },
            { 
                name: "Manthara", 
                category: "Ramayana Characters", 
                ratings: "4.5", 
                description: "Manthara, the maid of Kaikeyi, embodies the power of manipulation, steering events with her cunning advice that changes Ayodhya's destiny." 
            },
            { 
                name: "Shabari", 
                category: "Ramayana Characters", 
                ratings: "4.7", 
                description: "Shabari, the devoted ascetic, exemplifies the simplicity of love and devotion as she offers fruits to Lord Rama with pure-hearted reverence." 
            },
            { 
                name: "Sampati", 
                category: "Ramayana Characters", 
                ratings: "4.6", 
                description: "Sampati, the elder brother of Jatayu, aids the vanaras with crucial information about Sita, representing the role of wisdom in service to dharma." 
            },
            { 
                name: "Urmila", 
                category: "Ramayana Characters", 
                ratings: "4.6", 
                description: "Urmila, the wife of Lakshmana, embodies silent sacrifice and patience, staying behind in Ayodhya while her husband accompanies Lord Rama." 
            },
            { 
                name: "Tataka", 
                category: "Ramayana Characters", 
                ratings: "4.5", 
                description: "Tataka, a demoness cursed to lose her beauty, symbolizes the destructive forces of nature and the eventual triumph of dharma through her defeat by Rama." 
            },
            { 
                name: "Khara", 
                category: "Ramayana Characters", 
                ratings: "4.5", 
                description: "Khara, Ravana's brother and a powerful rakshasa, represents brute force and arrogance, ultimately vanquished by Lord Rama in a display of divine justice." 
            },

    // Mahabharata Characters

        { 
            name: "Krishna", 
            category: "Mahabharata Characters", 
            ratings: "5.0", 
            description: "Krishna, the divine guide and charioteer of Arjuna, represents cosmic wisdom and the eternal protector of dharma, offering profound teachings in the Bhagavad Gita." 
        },
        { 
            name: "Arjuna", 
            category: "Mahabharata Characters", 
            ratings: "4.9", 
            description: "Arjuna, the Pandava prince and peerless archer, embodies the spiritual seeker guided by Krishna to overcome doubt and fulfill his righteous duty." 
        },
        { 
            name: "Yudhishthira", 
            category: "Mahabharata Characters", 
            ratings: "4.8", 
            description: "Yudhishthira, the eldest Pandava and son of Dharma, symbolizes steadfast virtue and the moral dilemmas faced in the pursuit of truth." 
        },
        { 
            name: "Bhima", 
            category: "Mahabharata Characters", 
            ratings: "4.8", 
            description: "Bhima, the mighty Pandava known for his immense strength, represents unyielding loyalty and the power to combat injustice." 
        },
        { 
            name: "Nakula", 
            category: "Mahabharata Characters", 
            ratings: "4.6", 
            description: "Nakula, the fourth Pandava and master horseman, exemplifies grace, humility, and unwavering devotion to his brothers." 
        },
        { 
            name: "Sahadeva", 
            category: "Mahabharata Characters", 
            ratings: "4.6", 
            description: "Sahadeva, the youngest Pandava, is renowned for his wisdom and knowledge of astrology, embodying quiet intellect and loyalty." 
        },
        { 
            name: "Draupadi", 
            category: "Mahabharata Characters", 
            ratings: "4.9", 
            description: "Draupadi, the queen of the Pandavas, represents resilience and the divine force that inspires justice and truth in the epic's unfolding drama." 
        },
        { 
            name: "Duryodhana", 
            category: "Mahabharata Characters", 
            ratings: "4.8", 
            description: "Duryodhana, the ambitious Kaurava prince, symbolizes unchecked desire and the tragic consequences of adharma and envy." 
        },
        { 
            name: "Karna", 
            category: "Mahabharata Characters", 
            ratings: "4.9", 
            description: "Karna, the noble warrior and son of the Sun God, embodies the pathos of loyalty and honor amidst the challenges of fate and societal rejection." 
        },
        { 
            name: "Bhishma", 
            category: "Mahabharata Characters", 
            ratings: "4.9", 
            description: "Bhishma, the grand patriarch of the Kuru dynasty, exemplifies steadfast duty and sacrifice, holding the epic's moral compass with his wisdom and vows." 
        },
        { 
            name: "Dronacharya", 
            category: "Mahabharata Characters", 
            ratings: "4.8", 
            description: "Dronacharya, the revered teacher of the Kuru princes, symbolizes the duality of wisdom and allegiance in a world rife with moral conflict." 
        },
        { 
            name: "Kunti", 
            category: "Mahabharata Characters", 
            ratings: "4.7", 
            description: "Kunti, the mother of the Pandavas, represents the strength of motherhood and the endurance required to uphold dharma amidst personal trials." 
        },
        { 
            name: "Gandhari", 
            category: "Mahabharata Characters", 
            ratings: "4.7", 
            description: "Gandhari, the blindfolded queen and mother of the Kauravas, embodies devotion and the profound sorrow of witnessing the consequences of adharma." 
        },
        { 
            name: "Shakuni", 
            category: "Mahabharata Characters", 
            ratings: "4.6", 
            description: "Shakuni, the cunning uncle of the Kauravas, represents manipulation and the destructive power of vengeance in shaping destiny." 
        },
        { 
            name: "Abhimanyu", 
            category: "Mahabharata Characters", 
            ratings: "4.8", 
            description: "Abhimanyu, the valiant son of Arjuna, symbolizes youthful heroism and the ultimate sacrifice in the service of dharma." 
        },
        { 
            name: "Dhritarashtra", 
            category: "Mahabharata Characters", 
            ratings: "4.7", 
            description: "Dhritarashtra, the blind king of Hastinapur, represents the struggles of attachment and the perils of moral blindness." 
        },
        { 
            name: "Pandu", 
            category: "Mahabharata Characters", 
            ratings: "4.6", 
            description: "Pandu, the father of the Pandavas, symbolizes the complexities of duty and the consequences of unintended transgressions." 
        },
        { 
            name: "Madri", 
            category: "Mahabharata Characters", 
            ratings: "4.6", 
            description: "Madri, the second wife of Pandu, represents love and sacrifice, ultimately giving her life to fulfill her role as a devoted mother." 
        },
        { 
            name: "Vidura", 
            category: "Mahabharata Characters", 
            ratings: "4.8", 
            description: "Vidura, the wise advisor to the Kuru throne, embodies dharma and impartial counsel in the midst of familial strife." 
        },
        { 
            name: "Ashwatthama", 
            category: "Mahabharata Characters", 
            ratings: "4.8", 
            description: "Ashwatthama, the son of Dronacharya, represents the devastating impact of unchecked rage and the complex interplay of fate and free will." 
        },
            { 
                name: "Dushasana", 
                category: "Mahabharata Characters", 
                ratings: "4.6", 
                description: "Dushasana, the Kaurava prince, is infamous for his role in the disrobing of Draupadi and his unwavering loyalty to Duryodhana." 
            },
            { 
                name: "Yuyutsu", 
                category: "Mahabharata Characters", 
                ratings: "4.5", 
                description: "Yuyutsu, a Kaurava defector who joins the Pandavas, symbolizes righteousness in choosing the right side in the battle of Kurukshetra." 
            },
            { 
                name: "Uttara", 
                category: "Mahabharata Characters", 
                ratings: "4.6", 
                description: "Uttara, the prince of Matsya, plays a crucial role in the battle of Kurukshetra, particularly through his valiant participation in the war." 
            },
            { 
                name: "Subhadra", 
                category: "Mahabharata Characters", 
                ratings: "4.7", 
                description: "Subhadra, the sister of Krishna and wife of Arjuna, embodies love, courage, and devotion as the mother of Abhimanyu." 
            },
            { 
                name: "Ghatotkacha", 
                category: "Mahabharata Characters", 
                ratings: "4.7", 
                description: "Ghatotkacha, the son of Bhima and Hidimba, is a fierce warrior known for his incredible strength and magical powers, fighting valiantly in the war." 
            },
            { 
                name: "Hidimba", 
                category: "Mahabharata Characters", 
                ratings: "4.6", 
                description: "Hidimba, the demoness who marries Bhima, symbolizes loyalty and maternal love as the mother of Ghatotkacha." 
            },
            { 
                name: "Jayadratha", 
                category: "Mahabharata Characters", 
                ratings: "4.6", 
                description: "Jayadratha, the king of Sindhu, is known for his role in the death of Abhimanyu, playing a pivotal part in the war's tragic events." 
            },
            { 
                name: "Kripacharya", 
                category: "Mahabharata Characters", 
                ratings: "4.7", 
                description: "Kripacharya, the teacher and mentor of both the Kauravas and Pandavas, embodies wisdom and impartiality amidst the unfolding chaos." 
            },
            { 
                name: "Dhrishtadyumna", 
                category: "Mahabharata Characters", 
                ratings: "4.7", 
                description: "Dhrishtadyumna, the son of Drupada, is known for his bravery and leadership, avenging the insult to his sister Draupadi by fighting in the war." 
            },
            { 
                name: "Shikhandi", 
                category: "Mahabharata Characters", 
                ratings: "4.7", 
                description: "Shikhandi, born as a woman and later transformed into a man, plays a pivotal role in Bhishma's death, symbolizing the power of destiny and identity." 
            },
            { 
                name: "Virata", 
                category: "Mahabharata Characters", 
                ratings: "4.6", 
                description: "Virata, the king of Matsya, provides refuge to the Pandavas during their exile, showcasing his hospitality and honor." 
            },
            { 
                name: "Drupada", 
                category: "Mahabharata Characters", 
                ratings: "4.7", 
                description: "Drupada, the king of Panchala and father of Draupadi and Dhrishtadyumna, represents the themes of revenge, justice, and sacrifice." 
            },
            { 
                name: "Sanjaya", 
                category: "Mahabharata Characters", 
                ratings: "4.7", 
                description: "Sanjaya, the charioteer and advisor to Dhritarashtra, narrates the events of the Kurukshetra war, embodying a voice of reflection and insight." 
            },
            { 
                name: "Rukmi", 
                category: "Mahabharata Characters", 
                ratings: "4.5", 
                description: "Rukmi, the brother of Subhadra and an adversary of Krishna, represents opposition to the divine and the pride that leads to downfall." 
            },
            { 
                name: "Satyaki", 
                category: "Mahabharata Characters", 
                ratings: "4.6", 
                description: "Satyaki, a fierce warrior and devotee of Krishna, is known for his loyalty and valor in the battle of Kurukshetra, particularly for his unwavering defense of the Pandavas." 
            },
  

    // Deities and Sages

        { name: "Lord Vishnu", category: "Deities", ratings: "5.0", description: "Lord Vishnu, the protector and preserver of the universe, embodies divine compassion and justice, ensuring balance in the cosmic order." },
        { name: "Lord Shiva", category: "Deities", ratings: "5.0", description: "Lord Shiva, the destroyer and transformer, represents the power of destruction to create renewal, symbolizing ultimate truth and the path to spiritual liberation." },
        { name: "Lord Brahma", category: "Deities", ratings: "5.0", description: "Lord Brahma, the creator, is the embodiment of cosmic creativity, responsible for the creation of the universe and its preservation through his divine wisdom." },
        { name: "Goddess Lakshmi", category: "Deities", ratings: "5.0", description: "Goddess Lakshmi, the goddess of wealth and prosperity, brings abundance, both material and spiritual, and is a symbol of purity, fortune, and well-being." },
        { name: "Goddess Parvati", category: "Deities", ratings: "5.0", description: "Goddess Parvati, the mother goddess, embodies love, fertility, and devotion, standing as the perfect balance of strength, beauty, and nurturing energy." },
        { name: "Narada Muni", category: "Sages", ratings: "4.8", description: "Narada Muni, the divine sage and celestial musician, is known for spreading knowledge and devotion, playing a pivotal role in the unfolding of cosmic events through his wisdom." },
        { name: "Prahlada", category: "Puranic Characters", ratings: "4.7", description: "Prahlada, a devout child and a symbol of unwavering faith, stood firm against his father's tyranny, illustrating the power of devotion to Lord Vishnu." },
        { name: "Dhruva", category: "Puranic Characters", ratings: "4.7", description: "Dhruva, a young prince who meditated with unwavering devotion, attained eternal status in the heavens, symbolizing the strength of perseverance and faith." },
        { name: "Markandeya", category: "Sages", ratings: "4.7", description: "Markandeya, the eternal sage, is revered for his profound devotion and longevity, having been granted the boon of immortality by Lord Shiva." },


    // Temples
    
        { name: "Tirupati Balaji Temple", category: "Temples", ratings: "5.0", description: "Tirupati Balaji Temple, located in Andhra Pradesh, is dedicated to Lord Venkateswara, a form of Lord Vishnu. It is one of the most visited pilgrimage sites in India, known for its divine blessings and magnificent architecture." },
        { name: "Varanasi Temples", category: "Temples", ratings: "4.9", description: "The temples in Varanasi, especially the Kashi Vishwanath Temple, are deeply revered, with the city being a major spiritual center for Hindus. Varanasi is considered the city of Lord Shiva, offering devotees a chance to seek moksha." },
        { name: "Somnath Temple", category: "Temples", ratings: "4.9", description: "Somnath Temple in Gujarat is one of the twelve Jyotirlingas dedicated to Lord Shiva. It is renowned for its ancient heritage, resilience, and the divine energy that attracts thousands of pilgrims each year." },
        { name: "Meenakshi Temple", category: "Temples", ratings: "4.8", description: "Meenakshi Temple in Madurai, dedicated to Goddess Meenakshi and Lord Sundareswarar, is an architectural marvel. It is famous for its towering gopurams, intricate sculptures, and vibrant rituals." },
        { name: "Konark Sun Temple", category: "Temples", ratings: "4.8", description: "Konark Sun Temple in Odisha is dedicated to the Sun God, Surya. The temple is an iconic example of Kalinga architecture and is known for its chariot-shaped structure and UNESCO World Heritage status." },
        { name: "Kedarnath Temple", category: "Temples", ratings: "4.9", description: "Kedarnath Temple, located in the Uttarakhand Himalayas, is dedicated to Lord Shiva. It is one of the twelve Jyotirlingas and an important site in the Char Dham Yatra, surrounded by breathtaking views of the snow-clad mountains." },
        { name: "Badrinath Temple", category: "Temples", ratings: "4.9", description: "Badrinath Temple, also in Uttarakhand, is dedicated to Lord Vishnu. It is a key site in the Char Dham Yatra and stands amidst the picturesque landscapes of the Himalayas, revered for its spiritual significance and serene environment." },
        { name: "Jagannath Puri Temple", category: "Temples", ratings: "4.9", description: "Jagannath Puri Temple, located in Odisha, is dedicated to Lord Jagannath, a form of Lord Krishna. The temple is famous for the annual Rath Yatra (chariot festival) and is a major pilgrimage destination for Hindus." },
   

    // Festivals

        { name: "Diwali", category: "Festivals", ratings: "5.0", description: "Diwali, also known as the Festival of Lights, is one of the most important festivals in India. It celebrates the victory of light over darkness and good over evil, with families lighting lamps, bursting fireworks, and sharing sweets." },
        { name: "Holi", category: "Festivals", ratings: "4.9", description: "Holi, the Festival of Colors, is a joyous celebration marking the arrival of spring. It is a time for people to throw colored powder at each other, sing, dance, and celebrate with family and friends, symbolizing the triumph of good over evil." },
        { name: "Navaratri", category: "Festivals", ratings: "4.9", description: "Navaratri is a nine-night festival dedicated to the worship of Goddess Durga. It is celebrated with fasting, prayer, and traditional dance forms like Garba and Dandiya, culminating in Vijayadashami or Dussehra." },
        { name: "Janmashtami", category: "Festivals", ratings: "4.9", description: "Janmashtami celebrates the birth of Lord Krishna, one of the most beloved deities in Hinduism. Devotees observe fasting, recite prayers, and reenact episodes from Krishna's life, especially his childhood exploits." },
        { name: "Maha Shivratri", category: "Festivals", ratings: "4.8", description: "Maha Shivratri is a significant festival dedicated to Lord Shiva. Devotees fast, chant mantras, and offer prayers to seek blessings for prosperity and spiritual growth, while observing night-long vigils." },
        { name: "Ganesh Chaturthi", category: "Festivals", ratings: "4.8", description: "Ganesh Chaturthi marks the birth of Lord Ganesha, the remover of obstacles. This festival is celebrated with grand processions, idol installations, prayers, and the immersion of the idols in water, symbolizing the cycle of life and renewal." },
        { name: "Ram Navami", category: "Festivals", ratings: "4.8", description: "Ram Navami celebrates the birth of Lord Rama, the hero of the Ramayana. It is observed with prayers, processions, and recitations of the Ramayana, highlighting Rama's virtues of righteousness and virtue." },
        { name: "Karwa Chauth", category: "Festivals", ratings: "4.7", description: "Karwa Chauth is a fasting ritual observed by married Hindu women for the well-being and longevity of their husbands. Women fast from sunrise to moonrise, praying for their husband's health and prosperity." },

    

    // Philosophy Schools
       { name: "Advaita Vedanta", category: "Philosophy", ratings: "4.9", description: "Advaita Vedanta is a non-dualistic school of Hindu philosophy that teaches the oneness of the individual soul (Atman) with the Supreme Reality (Brahman). It emphasizes the idea that the ultimate truth is beyond perception and intellectual understanding." },
        { name: "Dvaita Vedanta", category: "Philosophy", ratings: "4.8", description: "Dvaita Vedanta, or dualism, posits a clear distinction between the individual soul (Atman) and the Supreme Being (Brahman). It teaches that the two are eternally separate and emphasizes devotion (bhakti) to the personal god." },
        { name: "Vishishtadvaita", category: "Philosophy", ratings: "4.8", description: "Vishishtadvaita, or qualified non-dualism, believes that while Brahman is the ultimate reality, it manifests in various forms. It teaches that individual souls are distinct but dependent on Brahman, and their union with Brahman is the goal." },
        { name: "Samkhya", category: "Philosophy", ratings: "4.7", description: "Samkhya is one of the oldest Indian philosophical systems, focusing on the enumeration of the elements of existence. It posits that the universe is composed of two eternal realities: Purusha (consciousness) and Prakriti (nature), and liberation is attained by realizing the distinction between them." },
        { name: "Yoga Philosophy", category: "Philosophy", ratings: "4.9", description: "Yoga philosophy emphasizes the importance of mental discipline, self-control, and meditation to achieve spiritual awakening. It aims for the union of the individual soul (Atman) with the supreme soul (Brahman), often outlined in the Yoga Sutras of Patanjali." },
        { name: "Nyaya", category: "Philosophy", ratings: "4.7", description: "Nyaya is a school of logic and epistemology that focuses on the methods of acquiring knowledge. It emphasizes reasoning, evidence, and debate to understand the nature of reality and how to attain valid knowledge." },
        { name: "Vaisheshika", category: "Philosophy", ratings: "4.7", description: "Vaisheshika is a system of philosophy that seeks to explain the nature of the physical world through a system of categories, focusing on the atomic composition of matter and the principles of cause and effect." },
        { name: "Mimamsa", category: "Philosophy", ratings: "4.7", description: "Mimamsa is an early school of Indian philosophy that focuses on the interpretation of sacred texts, particularly the Vedas. It emphasizes ritual actions and the proper performance of duties as a means of achieving liberation." },

    
    // More Deities
    
        { name: "Lord Ganesha", category: "Deities", ratings: "5.0", description: "Lord Ganesha, the elephant-headed god, is widely revered as the remover of obstacles, the god of wisdom, and the patron of arts and sciences. His image is found in almost every Hindu household." },
        { name: "Lord Hanuman", category: "Deities", ratings: "5.0", description: "Lord Hanuman is a central figure in the Ramayana, known for his devotion to Lord Rama, strength, and courage. He is considered the embodiment of loyalty, devotion, and selfless service." },
        { name: "Goddess Saraswati", category: "Deities", ratings: "5.0", description: "Goddess Saraswati is the goddess of wisdom, knowledge, music, and arts. She is often depicted playing the veena and is worshipped by students, artists, and scholars for learning and success." },
        { name: "Goddess Durga", category: "Deities", ratings: "5.0", description: "Goddess Durga is the warrior goddess, symbolizing power, strength, and protection. She is depicted riding a lion or tiger and is revered for her ability to protect the righteous from evil forces." },
        { name: "Goddess Kali", category: "Deities", ratings: "5.0", description: "Goddess Kali is the fierce, dark goddess who represents destruction and transformation. She is worshipped for her power to destroy negative forces and liberate souls from the cycle of birth and death." },
        { name: "Lord Kartikeya", category: "Deities", ratings: "4.9", description: "Lord Kartikeya is the god of war, the son of Lord Shiva and Goddess Parvati. He is depicted with six faces, symbolizing his omniscience, and is revered by devotees for his bravery and leadership." },
        { name: "Lord Surya", category: "Deities", ratings: "4.9", description: "Lord Surya, the Sun god, is a vital deity in Hinduism. He represents health, life, and energy, and is worshipped to seek blessings for prosperity, good health, and success." },
        { name: "Lord Indra", category: "Deities", ratings: "4.8", description: "Lord Indra is the king of the gods and the ruler of the heavens. He is associated with rain, storms, and thunder, and is worshipped for his ability to bring prosperity and remove obstacles." },
   
    
    // Sacred Texts - Additional
 
        { name: "Yoga Sutras", category: "Sacred Texts", ratings: "4.8", description: "The Yoga Sutras of Patanjali are a collection of aphorisms that outline the practice and philosophy of yoga. They offer guidance on meditation, ethical conduct, and achieving mental clarity and spiritual awakening." },
        { name: "Brahma Sutras", category: "Sacred Texts", ratings: "4.8", description: "The Brahma Sutras are a foundational text of Vedanta philosophy. They systematically address the nature of Brahman (the ultimate reality) and the relationship between the individual soul (Atman) and Brahman." },
        { name: "Vishnu Purana", category: "Sacred Texts", ratings: "4.7", description: "The Vishnu Purana is one of the eighteen Mahāpurāṇas, dedicated to the god Vishnu. It contains stories of creation, genealogies of gods and sages, and teachings on the nature of the divine, dharma, and cosmology." },
        { name: "Shiva Purana", category: "Sacred Texts", ratings: "4.7", description: "The Shiva Purana is a major text of Hinduism devoted to Lord Shiva. It contains stories of his cosmic creation, destruction, and regeneration, as well as hymns and teachings on spiritual practices." },
        { name: "Garuda Purana", category: "Sacred Texts", ratings: "4.7", description: "The Garuda Purana is a text that consists of mythological stories and teachings, focusing on Lord Vishnu, particularly in his incarnation as Garuda. It contains esoteric knowledge about life, death, and afterlife." },
        { name: "Bhagavata Purana", category: "Sacred Texts", ratings: "4.8", description: "The Bhagavata Purana is one of the most important texts in Hinduism, focusing on the life and teachings of Lord Vishnu, particularly in his incarnation as Krishna. It is revered for its stories of devotion, cosmology, and the path to liberation." },
        

    // Famous Sages

        { name: "Valmiki", category: "Sages", ratings: "4.9", description: "Valmiki is regarded as the author of the epic Ramayana, one of the greatest Hindu epics. He is known as the Adi Kavi (first poet), and his work has profoundly influenced Indian literature and culture." },
        { name: "Vyasa", category: "Sages", ratings: "4.9", description: "Vyasa, also known as Vedavyasa, is credited with composing the Mahabharata and compiling the Vedas. He is a central figure in Hindu tradition, regarded as a sage who structured the sacred texts of Hinduism." },
        { name: "Vasishtha", category: "Sages", ratings: "4.8", description: "Vasishtha is one of the seven great sages (Saptarishi) in Hindu tradition. He is known for his wisdom and role as a teacher and advisor to many kings, as well as his teachings on the nature of reality and self-realization." },
        { name: "Vishwamitra", category: "Sages", ratings: "4.8", description: "Vishwamitra is a revered sage known for his rigorous penance and asceticism. He is famous for his creation of the Gayatri mantra and his role in the Ramayana, where he is both a mentor to Lord Rama and a key figure in Vedic mythology." },
        { name: "Agastya", category: "Sages", ratings: "4.7", description: "Agastya is a sage in Hindu mythology credited with composing hymns in the Rigveda. He is a revered figure for his wisdom and his role in spreading Vedic knowledge and rituals across the southern parts of India." },
        { name: "Patanjali", category: "Sages", ratings: "4.8", description: "Patanjali is an ancient sage and the author of the Yoga Sutras, which form the foundation of the practice of yoga. He is also associated with the compilation of Sanskrit grammar in the form of the 'Mahabhashya'." },
        { name: "Adi Shankaracharya", category: "Sages", ratings: "4.9", description: "Adi Shankaracharya was an influential philosopher and theologian who consolidated the doctrine of Advaita Vedanta. His teachings emphasized non-duality and the idea that the ultimate reality is one and indivisible." },
  
    

    // Sacred Places
        { name: "Varanasi", category: "Sacred Places", ratings: "5.0", description: "Varanasi, also known as Kashi, is one of the oldest continuously inhabited cities in the world. It is considered the holiest city in Hinduism, with thousands of temples, ghats, and the famous Kashi Vishwanath Temple." },
        { name: "Mathura", category: "Sacred Places", ratings: "4.9", description: "Mathura is the birthplace of Lord Krishna, one of the most revered deities in Hinduism. It is known for its temples, including the Shri Krishna Janmabhoomi Temple, and for its historical and religious significance." },
        { name: "Vrindavan", category: "Sacred Places", ratings: "4.9", description: "Vrindavan is a town closely associated with the life of Lord Krishna, particularly his youth and his interactions with the gopis (female devotees). It is a major pilgrimage destination with temples, ghats, and lush gardens." },
        { name: "Haridwar", category: "Sacred Places", ratings: "4.9", description: "Haridwar is a major pilgrimage city in Uttarakhand, known for the Har Ki Pauri ghat, where devotees take a holy dip in the Ganges River to cleanse their sins. It is one of the seven holiest places in Hinduism." },
        { name: "Rishikesh", category: "Sacred Places", ratings: "4.8", description: "Rishikesh, known as the 'Yoga Capital of the World,' is a spiritual center and a gateway to the Himalayas. It is famous for its ashrams, yoga retreats, and the iconic Lakshman Jhula bridge over the Ganges." },
        { name: "Ayodhya", category: "Sacred Places", ratings: "4.9", description: "Ayodhya is the birthplace of Lord Rama and is one of the most significant religious sites in India. The city is known for the Ram Janmabhoomi Temple, dedicated to Lord Rama, and its rich history in Hindu mythology." },
        { name: "Dwarka", category: "Sacred Places", ratings: "4.8", description: "Dwarka, an ancient city mentioned in the Mahabharata, is associated with Lord Krishna. It is one of the Char Dham pilgrimage sites and is famous for the Dwarkadhish Temple, which is dedicated to Krishna." },
   
    

    // Concepts
   
        { name: "Karma", category: "Concepts", ratings: "4.9", description: "Karma refers to the principle of cause and effect in Hinduism, where a person's actions (good or bad) influence their future experiences. It is central to the belief in the cycle of birth, death, and rebirth." },
        { name: "Dharma", category: "Concepts", ratings: "4.9", description: "Dharma represents the moral law, duty, and righteousness in Hinduism. It is the path of living ethically and in harmony with the universe, encompassing duties, rights, laws, and justice." },
        { name: "Moksha", category: "Concepts", ratings: "4.9", description: "Moksha is the ultimate goal in Hinduism, representing liberation from the cycle of birth, death, and rebirth (samsara). It is achieved through self-realization, knowledge, and the realization of oneness with the divine." },
        { name: "Reincarnation", category: "Concepts", ratings: "4.8", description: "Reincarnation is the belief that after death, the soul is reborn in a new body. It is a fundamental concept in Hinduism, suggesting that life is a continuous cycle of birth, death, and rebirth." },
        { name: "Yoga", category: "Concepts", ratings: "4.9", description: "Yoga is a spiritual and physical discipline aimed at uniting the body, mind, and soul. It encompasses various practices, including meditation, postures (asanas), and breathing exercises, to achieve spiritual growth and mental peace." },
        { name: "Meditation", category: "Concepts", ratings: "4.8", description: "Meditation is a practice of focusing the mind to achieve mental clarity, spiritual insight, and inner peace. It is a key aspect of spiritual practices in Hinduism, used to connect with the divine and attain self-realization." },
        { name: "Ahimsa", category: "Concepts", ratings: "4.8", description: "Ahimsa refers to non-violence or the principle of not causing harm to any living being, whether through thought, word, or action. It is a core value in Hinduism, Buddhism, and Jainism." },
        { name: "Satya", category: "Concepts", ratings: "4.8", description: "Satya means truthfulness or the pursuit of truth. It encourages honest living and is considered an important virtue in Hindu philosophy, guiding individuals to act in alignment with reality and justice." }
   
    
];


module.exports = topics;