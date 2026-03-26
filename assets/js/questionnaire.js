// Base initial 24 questions (already set for Stone Age and early UK history)
const initialQuestions = [
    {
        question: "Who were the first people to arrive in Britain, in what we call the Stone Age?",
        answers: ["Farmers", "Hunter-gatherers", "Warriors", "Pirates"],
        correctAnswers: ["Hunter-gatherers"],
        explanation: "The very first inhabitants of Britain lived by hunting animals and gathering wild plants during the Stone Age. Farming came later during the Neolithic period."
    },
    {
        question: "When did Britain become permanently separated from the continent by the English Channel?",
        answers: ["50,000 years ago", "18,000 years ago", "15,000 years ago", "10,000 years ago"],
        correctAnswers: ["10,000 years ago"],
        explanation: "As the last Ice Age ended and sea levels rose, the land bridge between Britain and continental Europe flooded permanently around 10,000 years ago."
    },
    {
        question: "What is the best preserved prehistoric village in northern Europe, dating to the Stone Age?",
        answers: ["Maiden Castle", "Stonehenge", "Skara Brae", "Avebury"],
        correctAnswers: ["Skara Brae"],
        explanation: "Located on Orkney, off the north coast of Scotland, Skara Brae is a remarkably well-preserved Neolithic village revealing how people lived at the end of the Stone Age."
    },
    {
        question: "Which of the following is NOT a fundamental principle of British life?",
        answers: ["Tolerance of those with different faiths and beliefs", "The rule of law", "Autocracy", "Democracy"],
        correctAnswers: ["Autocracy"],
        explanation: "Autocracy (rule by a single person with unlimited power) is the opposite of British democratic values. The UK is based on tolerance, the rule of law, and democracy."
    },
    {
        question: "During whose reign did Wales become formally united with England by the Act for the Government of Wales?",
        answers: ["Henry VII", "Henry VIII", "Elizabeth I", "James I"],
        correctAnswers: ["Henry VIII"],
        explanation: "The Acts of Union 1535–1542 formally united Wales with England during Henry VIII's reign."
    },
    {
        question: "The Elizabethan period is known especially for the plays and poems of which playwright?",
        answers: ["Alexander Dumas", "Charles Dickens", "Thomas Hardy", "William Shakespeare"],
        correctAnswers: ["William Shakespeare"],
        explanation: "William Shakespeare (1564–1616) is the defining literary figure of the Elizabethan era, writing plays such as Hamlet, Othello and A Midsummer Night's Dream."
    },
    {
        question: "Which TWO of the following are environmental charities?",
        answers: ["Crisis", "The National Trust", "Friends of the Earth", "Oxfam"],
        correctAnswers: ["The National Trust", "Friends of the Earth"],
        explanation: "The National Trust is dedicated to preserving historic places and natural environments in the UK. Friends of the Earth is an international environmental campaign organisation."
    },
    {
        question: "Which flag has a diagonal red cross on a white background?",
        answers: ["The Cross of St George", "The Cross of St Andrew", "The Cross of St Patrick", "The Cross of St David"],
        correctAnswers: ["The Cross of St Patrick"],
        explanation: "St Patrick's Cross is a red diagonal cross on a white background, representing Ireland. St George's Cross (England) is vertical, St Andrew's is white on blue (Scotland)."
    },
    {
        question: "Which British sportsman won five consecutive gold medals at the Olympic Games in rowing?",
        answers: ["Roger Bannister", "Sir Steve Redgrave", "Bradley Wiggins", "Mo Farah"],
        correctAnswers: ["Sir Steve Redgrave"],
        explanation: "Sir Steve Redgrave won gold medals at five consecutive Olympic Games from 1984 to 2000, making him one of Britain's greatest Olympians."
    },
    {
        question: "What does the UK offer to its residents or citizens? (Choose TWO)",
        answers: ["Freedom of belief and religion", "Free housing for all", "Freedom of speech", "Free university education for all"],
        correctAnswers: ["Freedom of belief and religion", "Freedom of speech"],
        explanation: "The UK upholds freedom of religion and freedom of speech as fundamental rights. Housing support and university education are not universally free."
    },
    {
        question: "In 1455, a civil war was fought between the House of Lancaster and the House of York. What was it called?",
        answers: ["The English Civil War", "The Wars of the Roses", "The Battle of Hastings", "The Peasants' Revolt"],
        correctAnswers: ["The Wars of the Roses"],
        explanation: "The Wars of the Roses (1455–1487) were a series of civil wars between the Lancastrians (red rose) and the Yorkists (white rose)."
    },
    {
        question: "How many members does the Scottish Parliament have?",
        answers: ["100", "108", "129", "150"],
        correctAnswers: ["129"],
        explanation: "The Scottish Parliament has 129 Members of the Scottish Parliament (MSPs)."
    },
    {
        question: "What is the capital city of Northern Ireland?",
        answers: ["Dublin", "Cork", "Edinburgh", "Belfast"],
        correctAnswers: ["Belfast"],
        explanation: "Belfast is the capital and largest city of Northern Ireland. Dublin is the capital of the Republic of Ireland."
    },
    {
        question: "When did the First World War end?",
        answers: ["9th November 1918", "11th December 1918", "11th November 1918", "9th December 1918"],
        correctAnswers: ["11th November 1918"],
        explanation: "The Armistice was signed at 11am on 11 November 1918, ending World War One."
    },
    {
        question: "Who established the Church of England?",
        answers: ["Elizabeth I", "The Archbishop of Canterbury", "Henry VIII", "King Charles III"],
        correctAnswers: ["Henry VIII"],
        explanation: "Henry VIII broke from Rome and established the Church of England after the Pope refused to annul his marriage to Catherine of Aragon."
    },
    {
        question: "Which Scottish city is known as the home of golf?",
        answers: ["Dundee", "Aberdeen", "Edinburgh", "St Andrews"],
        correctAnswers: ["St Andrews"],
        explanation: "St Andrews in Fife is widely regarded as the home of golf, and the Royal and Ancient Golf Club is based there."
    },
    {
        question: "When was the National Trust founded?",
        answers: ["1890", "1910", "1895", "1980"],
        correctAnswers: ["1895"],
        explanation: "The National Trust was founded in 1895 by three volunteers to preserve places of historic interest and natural beauty."
    },
    {
        question: "After the Black Death, new social classes appeared in England, including large landowners known as:",
        answers: ["Clans", "Nobility", "Judiciary", "Gentry"],
        correctAnswers: ["Gentry"],
        explanation: "Following the labour shortages caused by the Black Death, a new class of large landowners known as the gentry emerged in England."
    },
    {
        question: "Elizabeth I was the younger daughter of which King?",
        answers: ["James I", "Henry VII", "William the Conqueror", "Henry VIII"],
        correctAnswers: ["Henry VIII"],
        explanation: "Elizabeth I was the daughter of Henry VIII and his second wife, Anne Boleyn."
    },
    {
        question: "Which of the following operas was written by Gilbert and Sullivan?",
        answers: ["The Phantom of the Opera", "Cats", "The Mousetrap", "The Mikado"],
        correctAnswers: ["The Mikado"],
        explanation: "The Mikado (1885) is one of the most famous comic operas written by W.S. Gilbert and Arthur Sullivan."
    },
    {
        question: "Where is Loch Lomond and the Trossachs National Park located?",
        answers: ["East of Scotland", "East of Wales", "West of Wales", "West of Scotland"],
        correctAnswers: ["West of Scotland"],
        explanation: "Loch Lomond and the Trossachs National Park is Scotland's first national park, located in the west of Scotland."
    },
    {
        question: "Who was the first British Prime Minister?",
        answers: ["Henry Pelham", "Oliver Cromwell", "Admiral Nelson", "Sir Robert Walpole"],
        correctAnswers: ["Sir Robert Walpole"],
        explanation: "Sir Robert Walpole is recognised as the first Prime Minister of Great Britain, serving from 1721 to 1742."
    },
    {
        question: "What day does Lent begin?",
        answers: ["Easter Sunday", "Shrove Tuesday", "Easter Monday", "Ash Wednesday"],
        correctAnswers: ["Ash Wednesday"],
        explanation: "Lent begins on Ash Wednesday, the day after Shrove Tuesday (Pancake Day), and lasts 40 days until Easter."
    },
    {
        question: "How old do you need to be to apply for a free TV licence?",
        answers: ["Over 60", "Over 65", "Over 70", "Over 75"],
        correctAnswers: ["Over 75"],
        explanation: "People aged over 75 can apply for a free TV licence. Blind people can get a 50% discount at any age."
    }
];

const extraQuestionsRaw = `
25. What is the official home of the Prime Minister?
A) Buckingham Palace
B) Windsor Castle
C) 21 Oxford Street
D) 10 Downing Street ✓
26. Which British sportswoman won two gold medals for running at the 2004 Olympic Games?
A) Jayne Torvill
B) Jessica Ennis-Hill
C) Dame Ellen MacArthur
D) Dame Kelly Holmes ✓
27. What percentage of the UK's total population lives in England?
A) 60%
B) 58%
C) 79%
D) 84% ✓
28. What was the approximate population of the UK in 2010?
A) Just over 50 million
B) Just over 55 million
C) Just over 62 million ✓
D) Just over 70 million
29. What day is April Fool's Day?
A) 1st March
B) 1st February
C) 1st April ✓
D) 1st May
30. Who is the fastest person to have sailed around the world single-handed?
A) Dame Kelly Holmes
B) Jayne Torvill
C) Bradley Wiggins
D) Dame Ellen MacArthur ✓
31. What are Welsh cakes traditionally made from?
A) Suet, onions and oatmeal
B) Bacon, eggs and potato bread
C) Potatoes and vegetables
D) Flour, dried fruits and spices ✓
32. Where is the London Eye situated?
A) On the northern bank of the River Thames
B) On the northern bank of the River Lea
C) On the southern bank of the River Lea
D) On the southern bank of the River Thames ✓
33. What is the role of the monarch in relation to the government?
A) Approve all government decisions
B) Override the Prime Minister on key policy
C) Advise, warn and encourage the government ✓
D) Appoint all ministers directly
34. The UK is a:
A) Federal Republic
B) Direct Democracy
C) Constitutional Monarchy ✓
D) Presidential Democracy
35. What do you need to apply to become a permanent resident or citizen of the UK? (Choose TWO)
A) A British driving licence
B) A British university degree
C) To be able to speak and read English ✓
D) A good understanding of life in the UK ✓
36. Which British scientist was awarded a Nobel Prize for discovering the structure of the DNA molecule?
A) Alan Turing
B) Sir Frank Whittle
C) Sir Christopher Cockerell
D) Francis Crick ✓
37. How long before Easter does Lent take place?
A) 40 days after Easter
B) 40 days before Christmas
C) 40 days after Christmas
D) 40 days before Easter ✓
38. Which of the following national galleries is NOT located in London?
A) Tate Britain
B) The National Gallery
C) Tate Modern
D) The National Museum (Cardiff) ✓
39. How much can you be fined for watching TV without a licence?
A) Up to £500
B) Up to £2,000
C) Up to £3,000
D) Up to £1,000 ✓
40. How old is the clock at the Houses of Parliament, known as "Big Ben"?
A) 100 years old
B) 200 years old
C) 250 years old
D) Over 150 years old ✓
41. The UK was a full member of the EU but did not use the Euro currency. True or False?
A) True ✓
B) False
C) Only Scotland used the Euro
D) Only England used the Euro
42. NATO was created with which TWO purposes?
A) Promote free trade
B) Help each other if they come under attack ✓
C) Promote human rights globally
D) Maintain peace between all its members ✓
43. The small claims procedure in England and Wales is used for claims of less than:
A) £15,000
B) £10,000
C) £1,000
D) £5,000 ✓
44. What sport was invented in Britain and exported to the rest of the world?
A) Basketball
B) Cricket ✓
C) Volleyball
D) Baseball
45. Which monarch was responsible for the Domesday Book?
A) King Harold
B) King Richard I
C) King Edward the Confessor
D) William the Conqueror ✓
46. When was the Magna Carta signed?
A) 1150
B) 1215 ✓
C) 1265
D) 1300
47. What is the currency of the UK?
A) Euro
B) Dollar
C) Pound Sterling ✓
D) Franc
48. Which patron saint is celebrated on 1 March?
A) St Andrew
B) St George
C) St Patrick
D) St David ✓
49. Which patron saint is celebrated on 23 April?
A) St David
B) St Andrew
C) St Patrick
D) St George ✓
50. Which patron saint is celebrated on 30 November?
A) St David
B) St George
C) St Patrick
D) St Andrew ✓
51. Which patron saint is celebrated on 17 March?
A) St David
B) St George
C) St Andrew
D) St Patrick ✓
52. How many members are there in the House of Commons?
A) 500
B) 550
C) 650 ✓
D) 700
53. What is the name of the upper house of the UK Parliament?
A) The Senate
B) The House of Commons
C) The House of Lords ✓
D) The Cabinet
54. How often must a general election be held in the UK?
A) Every 3 years
B) Every 4 years
C) Every 5 years ✓
D) Every 6 years
55. In the UK, what is the minimum voting age?
A) 16
B) 18 ✓
C) 20
D) 21
56. When were women in the UK first given the right to vote?
A) 1900
B) 1911
C) 1918 ✓
D) 1928
57. In which year did women gain the right to vote on equal terms with men in the UK?
A) 1918
B) 1925
C) 1928 ✓
D) 1930
58. Who led the campaign for women's suffrage in the UK?
A) Florence Nightingale
B) Marie Curie
C) Emmeline Pankhurst ✓
D) Mary Wollstonecraft
59. What is Remembrance Day commemorated on?
A) 1st November
B) 11th November ✓
C) 11th October
D) 1st December
60. What is the name of the devolved parliament in Scotland?
A) The Dáil
B) The Senedd
C) The Scottish Parliament ✓
D) The Welsh Assembly
61. The devolved parliament in Wales is called:
A) The Scottish Parliament
B) The Dáil
C) The Welsh Parliament
D) The Senedd ✓
62. Where is the Scottish Parliament based?
A) Glasgow
B) Edinburgh ✓
C) Aberdeen
D) Dundee
63. Where is the Senedd (Welsh Parliament) based?
A) Swansea
B) Newport
C) Cardiff ✓
D) Wrexham
64. What is the National Anthem of the UK?
A) Rule Britannia
B) Land of Hope and Glory
C) Jerusalem
D) God Save the King ✓
65. Who is the Head of State of the UK?
A) The Prime Minister
B) The Archbishop of Canterbury
C) The Speaker of the House of Commons
D) The Monarch ✓
66. Which battle in 1066 led to the Norman conquest of England?
A) The Battle of Bosworth
B) The Battle of Agincourt
C) The Battle of Hastings ✓
D) The Battle of Stamford Bridge
67. What was the name of the document signed in 1215 that limited the power of the king?
A) The Bill of Rights
B) The Act of Union
C) The Petition of Right
D) Magna Carta ✓
68. Which century did the Industrial Revolution begin in Britain?
A) 16th century
B) 17th century
C) 18th century ✓
D) 19th century
69. Which inventor is associated with the development of the steam engine, greatly improving it?
A) Isambard Kingdom Brunel
B) Richard Arkwright
C) James Watt ✓
D) George Stephenson
70. Which disease killed around one third of the population of Britain in 1348?
A) Smallpox
B) Cholera
C) Typhoid
D) Black Death (Plague) ✓
71. The Wars of the Roses was a civil war fought between which two families?
A) House of Lancaster ✓ and House of York ✓
B) House of Tudor and House of Stuart
C) House of Windsor and House of Hanover
D) House of Plantagenet and House of Normandy
72. Which king was defeated at the Battle of Bosworth Field in 1485?
A) Henry VI
B) Edward IV
C) Richard III ✓
D) Henry V
73. Who became the first Tudor king after defeating Richard III at the Battle of Bosworth?
A) Henry VI
B) Edward IV
C) Henry VII ✓
D) Henry VIII
74. What is the name given to the period of Charles II's return to power in 1660?
A) The Reformation
B) The Restoration of the Commonwealth
C) The Restoration ✓
D) The Glorious Revolution
75. What was the Glorious Revolution of 1688?
A) The signing of the Magna Carta
B) The execution of King Charles I
C) The invitation of William of Orange to rule England ✓
D) The Act of Union with Scotland
76. In what year was the Act of Union between England and Scotland signed?
A) 1688
B) 1707 ✓
C) 1714
D) 1800
77. In what year was the Act of Union with Ireland signed?
A) 1714
B) 1776
C) 1707
D) 1800 ✓
78. Who commanded the British fleet at the Battle of Trafalgar in 1805?
A) Duke of Wellington
B) Admiral Lord Nelson ✓
C) Admiral Drake
D) General Wolfe
79. At which battle in 1815 was Napoleon finally defeated?
A) Battle of Trafalgar
B) Battle of Blenheim
C) Battle of Waterloo ✓
D) Battle of Agincourt
80. Which British general commanded the forces at Waterloo?
A) Admiral Lord Nelson
B) Duke of Wellington ✓
C) General Wolfe
D) Sir Francis Drake
81. What was the name of the Irish famine that took place in the 1840s?
A) The Great Famine (Irish Famine) ✓
B) The Potato Wars
C) The Great Hunger Reform
D) The Dublin Famine
82. When did the Second World War begin?
A) 1939 ✓
B) 1938
C) 1940
D) 1941
83. When did the Second World War end?
A) 1944
B) 1945 ✓
C) 1946
D) 1947
84. Who was Britain's Prime Minister for most of the Second World War?
A) Clement Attlee
B) Neville Chamberlain
C) Anthony Eden
D) Winston Churchill ✓
85. Which welfare system was established in the UK after World War II?
A) The Poor Law
B) Universal Credit
C) The Welfare State ✓
D) The National Insurance Scheme
86. When was the National Health Service (NHS) established?
A) 1942
B) 1945
C) 1948 ✓
D) 1950
87. Who is credited with founding the NHS?
A) Clement Attlee
B) Aneurin Bevan ✓
C) William Beveridge
D) Ernest Bevin
88. Which report laid the foundations for the welfare state?
A) The Keynes Report
B) The Beveridge Report ✓
C) The Churchill Report
D) The Attlee Report
89. In which year did India and Pakistan gain independence from Britain?
A) 1945
B) 1948
C) 1950
D) 1947 ✓
90. What was the name of the 1950s programme where the UK invited people from Caribbean countries to come and work?
A) The Windrush Programme
B) The Empire Windrush initiative ✓
C) The Caribbean Migration Policy
D) The Commonwealth Act
91. The first Windrush passengers arrived from the Caribbean in which year?
A) 1945
B) 1950
C) 1948 ✓
D) 1952
92. What is the name of the UK's National Health Service?
A) The National Medical Service
B) The NHS ✓
C) The UK Health System
D) The British Medical Service
93. What is the legal age to buy alcohol in the UK?
A) 16
B) 18 ✓
C) 19
D) 21
94. What is the name of the process by which citizens can contact their elected representative?
A) Lobbying
B) Petitioning
C) Contacting their MP ✓
D) Referencing
95. What is the name of the bill that became law in 1998 and incorporated the European Convention on Human Rights into UK law?
A) The Equality Act
B) The Civil Rights Act
C) The Human Rights Act ✓
D) The Freedom Act
96. What language is spoken in Wales alongside English?
A) Gaelic
B) Cornish
C) Welsh ✓
D) Breton
97. What language is spoken in parts of Scotland?
A) Welsh
B) Cornish
C) Scottish Gaelic ✓
D) Irish
98. What is Hogmanay?
A) A Welsh festival
B) An English harvest celebration
C) A Scottish New Year celebration ✓
D) A Northern Irish tradition
99. What is Burns Night celebrated on?
A) 25 December
B) 30 November
C) 25 January ✓
D) 1 March
100. Who was Robert Burns?
A) A Welsh poet
B) An English playwright
C) An Irish novelist
D) A famous Scottish poet ✓
101. What is Bonfire Night celebrated on?
A) 31 October
B) 1 November
C) 5 November ✓
D) 11 November
102. What does Bonfire Night (Guy Fawkes Night) commemorate?
A) The end of World War II
B) The coronation of King James I
C) The failed Gunpowder Plot of 1605 ✓
D) The Battle of Trafalgar
103. Who was Guy Fawkes?
A) A Scottish rebel leader
B) A Welsh bard
C) One of the conspirators in the Gunpowder Plot ✓
D) An English admiral
104. What is celebrated on 25 December?
A) New Year's Day
B) Easter Sunday
C) Christmas Day ✓
D) Remembrance Day
105. What is Good Friday?
A) The Friday before Christmas
B) A public holiday in spring with no religious connection
C) The Friday before Easter Sunday, marking the crucifixion of Jesus ✓
D) The last Friday of the year
106. Easter celebrates which event in the Christian calendar?
A) The birth of Jesus
B) The baptism of Jesus
C) The resurrection of Jesus ✓
D) The entry of Jesus into Jerusalem
107. What is Diwali?
A) A Muslim festival
B) A Jewish festival
C) A Hindu, Sikh and Jain festival of light ✓
D) A Buddhist festival
108. What is Eid ul Fitr?
A) The beginning of Ramadan
B) A Hindu festival
C) A Muslim celebration marking the end of Ramadan ✓
D) A Sikh festival
109. What is Hanukkah?
A) A Muslim festival
B) A Hindu festival
C) A Christian festival
D) A Jewish festival of light ✓
110. Which sport is associated with Wimbledon?
A) Cricket
B) Football
C) Tennis ✓
D) Golf
111. Where is the Wimbledon tennis tournament held?
A) Manchester
B) Birmingham
C) London ✓
D) Bristol
112. Which horse racing event is held at Epsom Downs?
A) The Grand National
B) The Cheltenham Gold Cup
C) The Royal Ascot
D) The Derby ✓
113. Which horse racing event is held at Aintree?
A) The Derby
B) The Cheltenham Gold Cup
C) Royal Ascot
D) The Grand National ✓
114. The FA Cup is awarded in which sport?
A) Cricket
B) Rugby
C) Football ✓
D) Tennis
115. What is the Ashes?
A) A football competition between England and Scotland
B) A rugby tournament
C) A cricket competition between England and Australia ✓
D) A golf tournament
116. Where is the home of English cricket?
A) The Oval
B) Lord's Cricket Ground ✓
C) Edgbaston
D) Old Trafford
117. What is the name of the annual boat race held on the River Thames?
A) The Thames Regatta
B) The Oxford and Cambridge Boat Race ✓
C) The National Boat Race
D) The Royal Henley Race
118. In which city is the National Museum of Scotland located?
A) Glasgow
B) Aberdeen
C) Dundee
D) Edinburgh ✓
119. Who wrote the play "A Midsummer Night's Dream"?
A) Christopher Marlowe
B) Ben Jonson
C) William Shakespeare ✓
D) John Milton
120. Who wrote "Pride and Prejudice"?
A) Charlotte Brontë
B) George Eliot
C) Jane Austen ✓
D) Thomas Hardy
121. Who wrote "Oliver Twist"?
A) William Thackeray
B) Charles Dickens ✓
C) Anthony Trollope
D) Thomas Hardy
122. Who wrote "Robinson Crusoe"?
A) Jonathan Swift
B) Henry Fielding
C) Samuel Richardson
D) Daniel Defoe ✓
123. Which author wrote the Sherlock Holmes stories?
A) Agatha Christie
B) Wilkie Collins
C) Sir Arthur Conan Doyle ✓
D) H.G. Wells
124. Who painted "The Hay Wain"?
A) J.M.W. Turner
B) Thomas Gainsborough
C) John Constable ✓
D) William Hogarth
125. Who designed St Paul's Cathedral in London?
A) Inigo Jones
B) John Vanbrugh
C) Sir Christopher Wren ✓
D) Robert Adam
126. The Proms is an annual series of what type of events?
A) Art exhibitions
B) Film screenings
C) Classical music concerts ✓
D) Theatre productions
127. Which famous music event takes place in Glastonbury?
A) The Proms
B) The Royal Albert Hall Festival
C) Glastonbury Festival ✓
D) Edinburgh Fringe
128. The Edinburgh Festival is primarily known as a festival of:
A) Film
B) Music
C) Arts and culture (including theatre, comedy and music) ✓
D) Sport
129. What is the Notting Hill Carnival?
A) A Scottish Highland games event
B) A Welsh music festival
C) A Caribbean-influenced street festival in London ✓
D) An English morris dancing event
130. Who is the Poet Laureate appointed by?
A) The Prime Minister
B) The Speaker of the House of Commons
C) The Monarch ✓
D) The Arts Council
131. Which composer wrote the Water Music?
A) Henry Purcell
B) George Frideric Handel ✓
C) Benjamin Britten
D) Ralph Vaughan Williams
132. Which British-based composer wrote "The Planets" suite?
A) Edward Elgar
B) Benjamin Britten
C) Ralph Vaughan Williams
D) Gustav Holst ✓
133. Who composed the Enigma Variations?
A) Benjamin Britten
B) Gustav Holst
C) Henry Purcell
D) Edward Elgar ✓
134. Which actor is famous for playing Charlie Chaplin-style silent film roles?
A) Laurence Olivier
B) Charlie Chapman ✓
C) Alfred Hitchcock
D) Michael Caine
135. Alfred Hitchcock was famous as a:
A) Novelist
B) Composer
C) Film director ✓
D) Playwright
136. Which comedian was famous as one of the creators of the TV show "Fawlty Towers"?
A) Rowan Atkinson
B) John Cleese ✓
C) Benny Hill
D) Bob Hope
137. What does "first past the post" refer to in UK elections?
A) A method of proportional representation
B) A preference voting system
C) The candidate with the most votes wins the seat ✓
D) A run-off voting system
138. What is a by-election?
A) An election held in Scotland only
B) A local council election
C) An election held to fill a vacant seat between general elections ✓
D) An election for the House of Lords
139. What is the role of a magistrate?
A) Passing Acts of Parliament
B) Collecting taxes
C) Hearing less serious criminal cases and some civil cases ✓
D) Managing the police force
140. What is the role of a coroner?
A) To advise the monarch on legal matters
B) To oversee elections
C) To investigate sudden or unexplained deaths ✓
D) To prosecute criminal cases
141. What is the name of the highest court in the UK?
A) The Court of Appeal
B) The High Court
C) The Supreme Court ✓
D) The Privy Council
142. Who appoints judges in the UK?
A) The Prime Minister
B) Parliament
C) The Archbishop of Canterbury
D) The Monarch, on the advice of the Lord Chancellor ✓
143. What is the name of the police force in Northern Ireland?
A) The Royal Ulster Constabulary
B) The Northern Ireland Police Service
C) The Police Service of Northern Ireland (PSNI) ✓
D) The Ulster Constabulary
144. At what age can a person stand for election to Parliament?
A) 16
B) 18 ✓
C) 21
D) 25
145. What is the name of the official residence of the monarch in London?
A) Kensington Palace
B) Windsor Castle
C) Clarence House
D) Buckingham Palace ✓
146. What is the name of the residence used by the monarch in Scotland?
A) Balmoral Castle (Holyroodhouse)
B) Stirling Castle
C) Palace of Holyroodhouse ✓
D) Edinburgh Castle
147. How many countries are in the Commonwealth?
A) 34
B) 42
C) 54 ✓
D) 60
148. Who is the head of the Commonwealth?
A) The UN Secretary-General
B) The British Prime Minister
C) The British Monarch ✓
D) The President of South Africa
149. What year did the UK leave the European Union (Brexit)?
A) 2016
B) 2018
C) 2020 ✓
D) 2021
150. In which year was the Good Friday Agreement signed, bringing peace to Northern Ireland?
A) 1993
B) 1995
C) 2000
D) 1998 ✓
151. What is the name of the system used in Scotland for criminal jury trials?
A) Majority verdict
B) Unanimous verdict
C) Verdict by simple majority (15 jurors) ✓
D) Verdict by 12 jurors only
152. In Scotland, what is the third verdict available to a jury, besides "guilty" and "not guilty"?
A) Inconclusive
B) Undecided
C) Not proven ✓
D) Acquitted
153. What is the name of the legal officer in Scotland who is equivalent to a solicitor in England?
A) Advocate
B) Procurator Fiscal
C) Solicitor (also used in Scotland) ✓
D) Sheriff
154. What is a "Sheriff Court" in Scotland?
A) A court dealing only with civil matters
B) The highest court in Scotland
C) A court dealing with most criminal and civil cases in Scotland ✓
D) A court for juvenile offenders
155. What is the name of the senior judge in Scotland equivalent to the Lord Chief Justice in England?
A) The Lord Advocate
B) The Lord President ✓
C) The Lord Chancellor
D) The Procurator Fiscal
156. Where is the Giant's Causeway located?
A) Scotland
B) Wales
C) England
D) Northern Ireland ✓
157. What is the Giant's Causeway made of?
A) Granite rocks
B) Limestone columns
C) Basalt columns ✓
D) Sandstone formations
158. Which is the largest of the UK's national parks?
A) The Peak District
B) Snowdonia
C) The Lake District
D) The Cairngorms ✓
159. Ben Nevis is the highest mountain in the UK. In which country is it located?
A) Wales
B) England
C) Northern Ireland
D) Scotland ✓
160. What is the longest river in the UK?
A) The Thames
B) The Trent
C) The Clyde
D) The Severn ✓
161. Which river flows through London?
A) The Severn
B) The Trent
C) The Thames ✓
D) The Avon
162. What is the capital city of Wales?
A) Swansea
B) Newport
C) Wrexham
D) Cardiff ✓
163. What is the capital city of Scotland?
A) Glasgow
B) Aberdeen
C) Dundee
D) Edinburgh ✓
164. Which of the following is the largest city in Scotland?
A) Edinburgh
B) Dundee
C) Glasgow ✓
D) Aberdeen
165. What are the colours of the Union Jack?
A) Red, white and green
B) Blue, white and yellow
C) Red, green and blue
D) Red, white and blue ✓
166. The Union Jack is the national flag of:
A) England
B) Scotland
C) Wales
D) The United Kingdom ✓
167. Which cross represents England on the Union Jack?
A) The Cross of St Andrew
B) The Cross of St Patrick
C) The Cross of St David
D) The Cross of St George ✓
168. Which cross represents Scotland on the Union Jack?
A) The Cross of St George
B) The Cross of St Patrick
C) The Cross of St David
D) The Cross of St Andrew ✓
169. Wales is NOT represented on the Union Jack. True or False?
A) True ✓
B) False
C) Wales has its own separate flag
D) Wales is represented by the dragon
170. What is the English name for "Eisteddfod"?
A) A Welsh sporting event
B) A Scottish Highland Games
C) A Welsh festival of literature, music and performance ✓
D) A religious pilgrimage
171. Which building in London is associated with the Ceremony of the Keys each night?
A) Buckingham Palace
B) Westminster Abbey
C) The Tower of London ✓
D) St Paul's Cathedral
172. Stonehenge is located in which English county?
A) Cornwall
B) Devon
C) Dorset
D) Wiltshire ✓
173. What is the name of the prehistoric monument near Salisbury?
A) Avebury
B) Skara Brae
C) Stonehenge ✓
D) Maiden Castle
174. What is the approximate length of Hadrian's Wall?
A) 50 miles
B) 73 miles ✓
C) 100 miles
D) 120 miles
175. Hadrian's Wall was built by which emperor?
A) Julius Caesar
B) Augustus
C) Claudius
D) Emperor Hadrian ✓
176. What was the purpose of Hadrian's Wall?
A) To mark the border with Wales
B) To channel water from Scotland to England
C) To defend the northern frontier of Roman Britain ✓
D) To separate different English kingdoms
177. The Romans left Britain in approximately which year?
A) AD 410 ✓
B) AD 300
C) AD 450
D) AD 500
178. Who invaded Britain in 43 AD?
A) The Vikings
B) The Normans
C) The Saxons
D) The Romans ✓
179. Which group of people invaded Britain from Scandinavia from around the 8th century?
A) The Romans
B) The Normans
C) The Saxons
D) The Vikings ✓
180. Who was Alfred the Great?
A) A Viking king
B) A Norman lord
C) A Saxon king who fought off Viking invasions ✓
D) A Roman emperor
181. In what year did William of Normandy defeat King Harold at the Battle of Hastings?
A) 1050
B) 1066 ✓
C) 1087
D) 1100
182. What was the Domesday Book?
A) A religious text from the Middle Ages
B) A record of the plague deaths
C) A survey of all land and property in England commissioned by William I ✓
D) A list of laws passed by Parliament
183. Which King signed the Magna Carta?
A) Henry II
B) Richard I
C) King John ✓
D) Edward I
184. Who was the first person to print books in England using a printing press?
A) Geoffrey Chaucer
B) William Caxton ✓
C) Thomas More
D) William Tyndale
185. Who wrote "The Canterbury Tales"?
A) William Langland
B) John Gower
C) Geoffrey Chaucer ✓
D) Thomas Malory
186. What was the "Reformation"?
A) The reorganisation of Parliament in the 14th century
B) A series of wars between England and France
C) A movement to reform the Catholic Church, leading to the creation of Protestant churches ✓
D) The reorganisation of the English legal system
187. Henry VIII broke away from the Catholic Church to form the Church of England mainly because:
A) He disagreed with Catholic doctrine
B) He wanted to tax the church more
C) The Pope refused to allow him to divorce his first wife ✓
D) He was influenced by Martin Luther
188. Who was the "Virgin Queen"?
A) Mary I
B) Elizabeth I ✓
C) Mary Queen of Scots
D) Lady Jane Grey
189. What was the Spanish Armada?
A) A Spanish trade fleet
B) A fleet of Spanish ships sent to invade England in 1588 ✓
C) A Spanish diplomatic mission to England
D) A group of Spanish explorers
190. Who defeated the Spanish Armada?
A) Henry VIII
B) James I
C) Elizabeth I (with Sir Francis Drake) ✓
D) Oliver Cromwell
191. Who was Oliver Cromwell?
A) A king of England
B) A Scottish rebel leader
C) A Parliamentary leader who ruled as Lord Protector after the English Civil War ✓
D) A Welsh poet
192. What happened to King Charles I in 1649?
A) He abdicated and went into exile
B) He was imprisoned for life
C) He was tried and executed ✓
D) He died in battle
193. When was the English Civil War fought?
A) 1600–1610
B) 1642–1651 ✓
C) 1660–1670
D) 1688–1700
194. The Great Fire of London occurred in which year?
A) 1660
B) 1666 ✓
C) 1672
D) 1688
195. Which scientist developed the theory of gravity, famously inspired by a falling apple?
A) Michael Faraday
B) Charles Darwin
C) Sir Isaac Newton ✓
D) Robert Boyle
196. Charles Darwin is famous for developing which scientific theory?
A) The theory of relativity
B) The theory of gravity
C) The theory of evolution by natural selection ✓
D) The germ theory of disease
197. Who invented the telephone?
A) Thomas Edison
B) Guglielmo Marconi
C) Nikola Tesla
D) Alexander Graham Bell ✓
198. Who was the first person to run a mile in under four minutes?
A) Steve Ovett
B) Sebastian Coe
C) Mo Farah
D) Roger Bannister ✓
199. Which Scotsman invented the TV?
A) Alexander Fleming
B) James Watt
C) Adam Smith
D) John Logie Baird ✓
200. Alexander Fleming is famous for discovering:
A) Vaccination
B) DNA structure
C) The steam engine
D) Penicillin ✓
`;

function parseExtraQuestions(raw) {
    const lines = raw.trim().split(/\r?\n/).map((l) => l.trim());
    const qlist = [];
    let current = null;

    for (const line of lines) {
        if (!line) continue;

        const qMatch = line.match(/^([0-9]+)\.\s+(.+)$/);
        if (qMatch) {
            if (current) qlist.push(current);
            current = { question: qMatch[2].trim(), answers: [], correctAnswers: [] };
            continue;
        }

        const aMatch = line.match(/^([A-D])\)\s+(.+?)(?:\s*✓)?$/);
        if (aMatch && current) {
            const answerText = aMatch[2].trim();
            current.answers.push(answerText);
            if (line.includes('✓')) {
                current.correctAnswers.push(answerText);
            }
            continue;
        }
    }
    if (current) qlist.push(current);
    return qlist;
}

const extraQuestions = parseExtraQuestions(extraQuestionsRaw);

const quizQuestionsDataBaseRaw = [...initialQuestions, ...extraQuestions];

quizQuestionsDataBaseRaw.forEach((q) => {
    if (!q.explanation) {
        const correctText = q.correctAnswers.join(', ');
        q.explanation = `Correct answer: ${correctText}. Review this to improve your understanding of the topic.`;
    }
});

export const quizQuestionsDataBase = quizQuestionsDataBaseRaw;
