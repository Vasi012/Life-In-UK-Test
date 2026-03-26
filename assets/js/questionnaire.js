// Base initial 24 questions (already set for Stone Age and early UK history)
const initialQuestions = [
    {
        question: "Who were the first people to arrive in Britain, in what we call the Stone Age?",
        answers: [
            "Farmers",
            "Hunter-gatherers",
            "Warriors",
            "Pirates",
        ],
        correctAnswers: [
            "Hunter-gatherers",
        ],
        explanation: "The very first inhabitants of Britain lived by hunting animals and gathering wild plants during the Stone Age. Farming came later during the Neolithic period.",
        optionExplanations: {
            "Farmers": "Farmers is incorrect. The correct answer is Hunter-gatherers. The very first inhabitants of Britain lived by hunting animals and gathering wild plants during the Stone Age. Farming came later during the Neolithic period.",
            "Hunter-gatherers": "Hunter-gatherers is correct. The very first inhabitants of Britain lived by hunting animals and gathering wild plants during the Stone Age. Farming came later during the Neolithic period.",
            "Warriors": "Warriors is incorrect. The correct answer is Hunter-gatherers. The very first inhabitants of Britain lived by hunting animals and gathering wild plants during the Stone Age. Farming came later during the Neolithic period.",
            "Pirates": "Pirates is incorrect. The correct answer is Hunter-gatherers. The very first inhabitants of Britain lived by hunting animals and gathering wild plants during the Stone Age. Farming came later during the Neolithic period.",
        }
    },
    {
        question: "When did Britain become permanently separated from the continent by the English Channel?",
        answers: [
            "50,000 years ago",
            "18,000 years ago",
            "15,000 years ago",
            "10,000 years ago",
        ],
        correctAnswers: [
            "10,000 years ago",
        ],
        explanation: "As the last Ice Age ended and sea levels rose, the land bridge between Britain and continental Europe flooded permanently around 10,000 years ago.",
        optionExplanations: {
            "50,000 years ago": "50,000 years ago is incorrect. The correct answer is 10,000 years ago. As the last Ice Age ended and sea levels rose, the land bridge between Britain and continental Europe flooded permanently around 10,000 years ago.",
            "18,000 years ago": "18,000 years ago is incorrect. The correct answer is 10,000 years ago. As the last Ice Age ended and sea levels rose, the land bridge between Britain and continental Europe flooded permanently around 10,000 years ago.",
            "15,000 years ago": "15,000 years ago is incorrect. The correct answer is 10,000 years ago. As the last Ice Age ended and sea levels rose, the land bridge between Britain and continental Europe flooded permanently around 10,000 years ago.",
            "10,000 years ago": "10,000 years ago is correct. As the last Ice Age ended and sea levels rose, the land bridge between Britain and continental Europe flooded permanently around 10,000 years ago.",
        }
    },
    {
        question: "What is the best preserved prehistoric village in northern Europe, dating to the Stone Age?",
        answers: [
            "Maiden Castle",
            "Stonehenge",
            "Skara Brae",
            "Avebury",
        ],
        correctAnswers: [
            "Skara Brae",
        ],
        explanation: "Located on Orkney, off the north coast of Scotland, Skara Brae is a remarkably well-preserved Neolithic village revealing how people lived at the end of the Stone Age.",
        optionExplanations: {
            "Maiden Castle": "Maiden Castle is incorrect. The correct answer is Skara Brae. Located on Orkney, off the north coast of Scotland, Skara Brae is a remarkably well-preserved Neolithic village revealing how people lived at the end of the Stone Age.",
            "Stonehenge": "Stonehenge is incorrect. The correct answer is Skara Brae. Located on Orkney, off the north coast of Scotland, Skara Brae is a remarkably well-preserved Neolithic village revealing how people lived at the end of the Stone Age.",
            "Skara Brae": "Skara Brae is correct. Located on Orkney, off the north coast of Scotland, Skara Brae is a remarkably well-preserved Neolithic village revealing how people lived at the end of the Stone Age.",
            "Avebury": "Avebury is incorrect. The correct answer is Skara Brae. Located on Orkney, off the north coast of Scotland, Skara Brae is a remarkably well-preserved Neolithic village revealing how people lived at the end of the Stone Age.",
        }
    },
    {
        question: "Which of the following is NOT a fundamental principle of British life?",
        answers: [
            "Tolerance of those with different faiths and beliefs",
            "The rule of law",
            "Autocracy",
            "Democracy",
        ],
        correctAnswers: [
            "Autocracy",
        ],
        explanation: "Autocracy (rule by a single person with unlimited power) is the opposite of British democratic values. The UK is based on tolerance, the rule of law, and democracy.",
        optionExplanations: {
            "Tolerance of those with different faiths and beliefs": "Tolerance of those with different faiths and beliefs is incorrect. The correct answer is Autocracy. Autocracy (rule by a single person with unlimited power) is the opposite of British democratic values. The UK is based on tolerance, the rule of law, and democracy.",
            "The rule of law": "The rule of law is incorrect. The correct answer is Autocracy. Autocracy (rule by a single person with unlimited power) is the opposite of British democratic values. The UK is based on tolerance, the rule of law, and democracy.",
            "Autocracy": "Autocracy is correct. Autocracy (rule by a single person with unlimited power) is the opposite of British democratic values. The UK is based on tolerance, the rule of law, and democracy.",
            "Democracy": "Democracy is incorrect. The correct answer is Autocracy. Autocracy (rule by a single person with unlimited power) is the opposite of British democratic values. The UK is based on tolerance, the rule of law, and democracy.",
        }
    },
    {
        question: "During whose reign did Wales become formally united with England by the Act for the Government of Wales?",
        answers: [
            "Henry VII",
            "Henry VIII",
            "Elizabeth I",
            "James I",
        ],
        correctAnswers: [
            "Henry VIII",
        ],
        explanation: "The Acts of Union 1535\u20131542 formally united Wales with England during Henry VIII's reign.",
        optionExplanations: {
            "Henry VII": "Henry VII is incorrect. The correct answer is Henry VIII. The Acts of Union 1535\u20131542 formally united Wales with England during Henry VIII's reign.",
            "Henry VIII": "Henry VIII is correct. The Acts of Union 1535\u20131542 formally united Wales with England during Henry VIII's reign.",
            "Elizabeth I": "Elizabeth I is incorrect. The correct answer is Henry VIII. The Acts of Union 1535\u20131542 formally united Wales with England during Henry VIII's reign.",
            "James I": "James I is incorrect. The correct answer is Henry VIII. The Acts of Union 1535\u20131542 formally united Wales with England during Henry VIII's reign.",
        }
    },
    {
        question: "The Elizabethan period is known especially for the plays and poems of which playwright?",
        answers: [
            "Alexander Dumas",
            "Charles Dickens",
            "Thomas Hardy",
            "William Shakespeare",
        ],
        correctAnswers: [
            "William Shakespeare",
        ],
        explanation: "William Shakespeare (1564\u20131616) is the defining literary figure of the Elizabethan era, writing plays such as Hamlet, Othello and A Midsummer Night's Dream.",
        optionExplanations: {
            "Alexander Dumas": "Alexander Dumas is incorrect. The correct answer is William Shakespeare. William Shakespeare (1564\u20131616) is the defining literary figure of the Elizabethan era, writing plays such as Hamlet, Othello and A Midsummer Night's Dream.",
            "Charles Dickens": "Charles Dickens is incorrect. The correct answer is William Shakespeare. William Shakespeare (1564\u20131616) is the defining literary figure of the Elizabethan era, writing plays such as Hamlet, Othello and A Midsummer Night's Dream.",
            "Thomas Hardy": "Thomas Hardy is incorrect. The correct answer is William Shakespeare. William Shakespeare (1564\u20131616) is the defining literary figure of the Elizabethan era, writing plays such as Hamlet, Othello and A Midsummer Night's Dream.",
            "William Shakespeare": "William Shakespeare is correct. William Shakespeare (1564\u20131616) is the defining literary figure of the Elizabethan era, writing plays such as Hamlet, Othello and A Midsummer Night's Dream.",
        }
    },
    {
        question: "Which TWO of the following are environmental charities?",
        answers: [
            "Crisis",
            "The National Trust",
            "Friends of the Earth",
            "Oxfam",
        ],
        correctAnswers: [
            "The National Trust",
            "Friends of the Earth",
        ],
        explanation: "The National Trust is dedicated to preserving historic places and natural environments in the UK. Friends of the Earth is an international environmental campaign organisation.",
        optionExplanations: {
            "Crisis": "Crisis is incorrect. The correct answer is The National Trust, Friends of the Earth. The National Trust is dedicated to preserving historic places and natural environments in the UK. Friends of the Earth is an international environmental campaign organisation.",
            "The National Trust": "The National Trust is correct. The National Trust is dedicated to preserving historic places and natural environments in the UK. Friends of the Earth is an international environmental campaign organisation.",
            "Friends of the Earth": "Friends of the Earth is correct. The National Trust is dedicated to preserving historic places and natural environments in the UK. Friends of the Earth is an international environmental campaign organisation.",
            "Oxfam": "Oxfam is incorrect. The correct answer is The National Trust, Friends of the Earth. The National Trust is dedicated to preserving historic places and natural environments in the UK. Friends of the Earth is an international environmental campaign organisation.",
        }
    },
    {
        question: "Which flag has a diagonal red cross on a white background?",
        answers: [
            "The Cross of St George",
            "The Cross of St Andrew",
            "The Cross of St Patrick",
            "The Cross of St David",
        ],
        correctAnswers: [
            "The Cross of St Patrick",
        ],
        explanation: "St Patrick's Cross is a red diagonal cross on a white background, representing Ireland. St George's Cross (England) is vertical, St Andrew's is white on blue (Scotland).",
        optionExplanations: {
            "The Cross of St George": "The Cross of St George is incorrect. The correct answer is The Cross of St Patrick. St Patrick's Cross is a red diagonal cross on a white background, representing Ireland. St George's Cross (England) is vertical, St Andrew's is white on blue (Scotland).",
            "The Cross of St Andrew": "The Cross of St Andrew is incorrect. The correct answer is The Cross of St Patrick. St Patrick's Cross is a red diagonal cross on a white background, representing Ireland. St George's Cross (England) is vertical, St Andrew's is white on blue (Scotland).",
            "The Cross of St Patrick": "The Cross of St Patrick is correct. St Patrick's Cross is a red diagonal cross on a white background, representing Ireland. St George's Cross (England) is vertical, St Andrew's is white on blue (Scotland).",
            "The Cross of St David": "The Cross of St David is incorrect. The correct answer is The Cross of St Patrick. St Patrick's Cross is a red diagonal cross on a white background, representing Ireland. St George's Cross (England) is vertical, St Andrew's is white on blue (Scotland).",
        }
    },
    {
        question: "Which British sportsman won five consecutive gold medals at the Olympic Games in rowing?",
        answers: [
            "Roger Bannister",
            "Sir Steve Redgrave",
            "Bradley Wiggins",
            "Mo Farah",
        ],
        correctAnswers: [
            "Sir Steve Redgrave",
        ],
        explanation: "Sir Steve Redgrave won gold medals at five consecutive Olympic Games from 1984 to 2000, making him one of Britain's greatest Olympians.",
        optionExplanations: {
            "Roger Bannister": "Roger Bannister is incorrect. The correct answer is Sir Steve Redgrave. Sir Steve Redgrave won gold medals at five consecutive Olympic Games from 1984 to 2000, making him one of Britain's greatest Olympians.",
            "Sir Steve Redgrave": "Sir Steve Redgrave is correct. Sir Steve Redgrave won gold medals at five consecutive Olympic Games from 1984 to 2000, making him one of Britain's greatest Olympians.",
            "Bradley Wiggins": "Bradley Wiggins is incorrect. The correct answer is Sir Steve Redgrave. Sir Steve Redgrave won gold medals at five consecutive Olympic Games from 1984 to 2000, making him one of Britain's greatest Olympians.",
            "Mo Farah": "Mo Farah is incorrect. The correct answer is Sir Steve Redgrave. Sir Steve Redgrave won gold medals at five consecutive Olympic Games from 1984 to 2000, making him one of Britain's greatest Olympians.",
        }
    },
    {
        question: "What does the UK offer to its residents or citizens? (Choose TWO)",
        answers: [
            "Freedom of belief and religion",
            "Free housing for all",
            "Freedom of speech",
            "Free university education for all",
        ],
        correctAnswers: [
            "Freedom of belief and religion",
            "Freedom of speech",
        ],
        explanation: "The UK upholds freedom of religion and freedom of speech as fundamental rights. Housing support and university education are not universally free.",
        optionExplanations: {
            "Freedom of belief and religion": "Freedom of belief and religion is correct. The UK upholds freedom of religion and freedom of speech as fundamental rights. Housing support and university education are not universally free.",
            "Free housing for all": "Free housing for all is incorrect. The correct answer is Freedom of belief and religion, Freedom of speech. The UK upholds freedom of religion and freedom of speech as fundamental rights. Housing support and university education are not universally free.",
            "Freedom of speech": "Freedom of speech is correct. The UK upholds freedom of religion and freedom of speech as fundamental rights. Housing support and university education are not universally free.",
            "Free university education for all": "Free university education for all is incorrect. The correct answer is Freedom of belief and religion, Freedom of speech. The UK upholds freedom of religion and freedom of speech as fundamental rights. Housing support and university education are not universally free.",
        }
    },
    {
        question: "In 1455, a civil war was fought between the House of Lancaster and the House of York. What was it called?",
        answers: [
            "The English Civil War",
            "The Wars of the Roses",
            "The Battle of Hastings",
            "The Peasants' Revolt",
        ],
        correctAnswers: [
            "The Wars of the Roses",
        ],
        explanation: "The Wars of the Roses (1455\u20131487) were a series of civil wars between the Lancastrians (red rose) and the Yorkists (white rose).",
        optionExplanations: {
            "The English Civil War": "The English Civil War is incorrect. The correct answer is The Wars of the Roses. The Wars of the Roses (1455\u20131487) were a series of civil wars between the Lancastrians (red rose) and the Yorkists (white rose).",
            "The Wars of the Roses": "The Wars of the Roses is correct. The Wars of the Roses (1455\u20131487) were a series of civil wars between the Lancastrians (red rose) and the Yorkists (white rose).",
            "The Battle of Hastings": "The Battle of Hastings is incorrect. The correct answer is The Wars of the Roses. The Wars of the Roses (1455\u20131487) were a series of civil wars between the Lancastrians (red rose) and the Yorkists (white rose).",
            "The Peasants' Revolt": "The Peasants' Revolt is incorrect. The correct answer is The Wars of the Roses. The Wars of the Roses (1455\u20131487) were a series of civil wars between the Lancastrians (red rose) and the Yorkists (white rose).",
        }
    },
    {
        question: "How many members does the Scottish Parliament have?",
        answers: [
            "100",
            "108",
            "129",
            "150",
        ],
        correctAnswers: [
            "129",
        ],
        explanation: "The Scottish Parliament has 129 Members of the Scottish Parliament (MSPs).",
        optionExplanations: {
            "100": "100 is incorrect. The correct answer is 129. The Scottish Parliament has 129 Members of the Scottish Parliament (MSPs).",
            "108": "108 is incorrect. The correct answer is 129. The Scottish Parliament has 129 Members of the Scottish Parliament (MSPs).",
            "129": "129 is correct. The Scottish Parliament has 129 Members of the Scottish Parliament (MSPs).",
            "150": "150 is incorrect. The correct answer is 129. The Scottish Parliament has 129 Members of the Scottish Parliament (MSPs).",
        }
    },
    {
        question: "What is the capital city of Northern Ireland?",
        answers: [
            "Dublin",
            "Cork",
            "Edinburgh",
            "Belfast",
        ],
        correctAnswers: [
            "Belfast",
        ],
        explanation: "Belfast is the capital and largest city of Northern Ireland. Dublin is the capital of the Republic of Ireland.",
        optionExplanations: {
            "Dublin": "Dublin is incorrect. The correct answer is Belfast. Belfast is the capital and largest city of Northern Ireland. Dublin is the capital of the Republic of Ireland.",
            "Cork": "Cork is incorrect. The correct answer is Belfast. Belfast is the capital and largest city of Northern Ireland. Dublin is the capital of the Republic of Ireland.",
            "Edinburgh": "Edinburgh is incorrect. The correct answer is Belfast. Belfast is the capital and largest city of Northern Ireland. Dublin is the capital of the Republic of Ireland.",
            "Belfast": "Belfast is correct. Belfast is the capital and largest city of Northern Ireland. Dublin is the capital of the Republic of Ireland.",
        }
    },
    {
        question: "When did the First World War end?",
        answers: [
            "9th November 1918",
            "11th December 1918",
            "11th November 1918",
            "9th December 1918",
        ],
        correctAnswers: [
            "11th November 1918",
        ],
        explanation: "The Armistice was signed at 11am on 11 November 1918, ending World War One.",
        optionExplanations: {
            "9th November 1918": "9th November 1918 is incorrect. The correct answer is 11th November 1918. The Armistice was signed at 11am on 11 November 1918, ending World War One.",
            "11th December 1918": "11th December 1918 is incorrect. The correct answer is 11th November 1918. The Armistice was signed at 11am on 11 November 1918, ending World War One.",
            "11th November 1918": "11th November 1918 is correct. The Armistice was signed at 11am on 11 November 1918, ending World War One.",
            "9th December 1918": "9th December 1918 is incorrect. The correct answer is 11th November 1918. The Armistice was signed at 11am on 11 November 1918, ending World War One.",
        }
    },
    {
        question: "Who established the Church of England?",
        answers: [
            "Elizabeth I",
            "The Archbishop of Canterbury",
            "Henry VIII",
            "King Charles III",
        ],
        correctAnswers: [
            "Henry VIII",
        ],
        explanation: "Henry VIII broke from Rome and established the Church of England after the Pope refused to annul his marriage to Catherine of Aragon.",
        optionExplanations: {
            "Elizabeth I": "Elizabeth I is incorrect. The correct answer is Henry VIII. Henry VIII broke from Rome and established the Church of England after the Pope refused to annul his marriage to Catherine of Aragon.",
            "The Archbishop of Canterbury": "The Archbishop of Canterbury is incorrect. The correct answer is Henry VIII. Henry VIII broke from Rome and established the Church of England after the Pope refused to annul his marriage to Catherine of Aragon.",
            "Henry VIII": "Henry VIII is correct. Henry VIII broke from Rome and established the Church of England after the Pope refused to annul his marriage to Catherine of Aragon.",
            "King Charles III": "King Charles III is incorrect. The correct answer is Henry VIII. Henry VIII broke from Rome and established the Church of England after the Pope refused to annul his marriage to Catherine of Aragon.",
        }
    },
    {
        question: "Which Scottish city is known as the home of golf?",
        answers: [
            "Dundee",
            "Aberdeen",
            "Edinburgh",
            "St Andrews",
        ],
        correctAnswers: [
            "St Andrews",
        ],
        explanation: "St Andrews in Fife is widely regarded as the home of golf, and the Royal and Ancient Golf Club is based there.",
        optionExplanations: {
            "Dundee": "Dundee is incorrect. The correct answer is St Andrews. St Andrews in Fife is widely regarded as the home of golf, and the Royal and Ancient Golf Club is based there.",
            "Aberdeen": "Aberdeen is incorrect. The correct answer is St Andrews. St Andrews in Fife is widely regarded as the home of golf, and the Royal and Ancient Golf Club is based there.",
            "Edinburgh": "Edinburgh is incorrect. The correct answer is St Andrews. St Andrews in Fife is widely regarded as the home of golf, and the Royal and Ancient Golf Club is based there.",
            "St Andrews": "St Andrews is correct. St Andrews in Fife is widely regarded as the home of golf, and the Royal and Ancient Golf Club is based there.",
        }
    },
    {
        question: "When was the National Trust founded?",
        answers: [
            "1890",
            "1910",
            "1895",
            "1980",
        ],
        correctAnswers: [
            "1895",
        ],
        explanation: "The National Trust was founded in 1895 by three volunteers to preserve places of historic interest and natural beauty.",
        optionExplanations: {
            "1890": "1890 is incorrect. The correct answer is 1895. The National Trust was founded in 1895 by three volunteers to preserve places of historic interest and natural beauty.",
            "1910": "1910 is incorrect. The correct answer is 1895. The National Trust was founded in 1895 by three volunteers to preserve places of historic interest and natural beauty.",
            "1895": "1895 is correct. The National Trust was founded in 1895 by three volunteers to preserve places of historic interest and natural beauty.",
            "1980": "1980 is incorrect. The correct answer is 1895. The National Trust was founded in 1895 by three volunteers to preserve places of historic interest and natural beauty.",
        }
    },
    {
        question: "After the Black Death, new social classes appeared in England, including large landowners known as:",
        answers: [
            "Clans",
            "Nobility",
            "Judiciary",
            "Gentry",
        ],
        correctAnswers: [
            "Gentry",
        ],
        explanation: "Following the labour shortages caused by the Black Death, a new class of large landowners known as the gentry emerged in England.",
        optionExplanations: {
            "Clans": "Clans is incorrect. The correct answer is Gentry. Following the labour shortages caused by the Black Death, a new class of large landowners known as the gentry emerged in England.",
            "Nobility": "Nobility is incorrect. The correct answer is Gentry. Following the labour shortages caused by the Black Death, a new class of large landowners known as the gentry emerged in England.",
            "Judiciary": "Judiciary is incorrect. The correct answer is Gentry. Following the labour shortages caused by the Black Death, a new class of large landowners known as the gentry emerged in England.",
            "Gentry": "Gentry is correct. Following the labour shortages caused by the Black Death, a new class of large landowners known as the gentry emerged in England.",
        }
    },
    {
        question: "Elizabeth I was the younger daughter of which King?",
        answers: [
            "James I",
            "Henry VII",
            "William the Conqueror",
            "Henry VIII",
        ],
        correctAnswers: [
            "Henry VIII",
        ],
        explanation: "Elizabeth I was the daughter of Henry VIII and his second wife, Anne Boleyn.",
        optionExplanations: {
            "James I": "James I is incorrect. The correct answer is Henry VIII. Elizabeth I was the daughter of Henry VIII and his second wife, Anne Boleyn.",
            "Henry VII": "Henry VII is incorrect. The correct answer is Henry VIII. Elizabeth I was the daughter of Henry VIII and his second wife, Anne Boleyn.",
            "William the Conqueror": "William the Conqueror is incorrect. The correct answer is Henry VIII. Elizabeth I was the daughter of Henry VIII and his second wife, Anne Boleyn.",
            "Henry VIII": "Henry VIII is correct. Elizabeth I was the daughter of Henry VIII and his second wife, Anne Boleyn.",
        }
    },
    {
        question: "Which of the following operas was written by Gilbert and Sullivan?",
        answers: [
            "The Phantom of the Opera",
            "Cats",
            "The Mousetrap",
            "The Mikado",
        ],
        correctAnswers: [
            "The Mikado",
        ],
        explanation: "The Mikado (1885) is one of the most famous comic operas written by W.S. Gilbert and Arthur Sullivan.",
        optionExplanations: {
            "The Phantom of the Opera": "The Phantom of the Opera is incorrect. The correct answer is The Mikado. The Mikado (1885) is one of the most famous comic operas written by W.S. Gilbert and Arthur Sullivan.",
            "Cats": "Cats is incorrect. The correct answer is The Mikado. The Mikado (1885) is one of the most famous comic operas written by W.S. Gilbert and Arthur Sullivan.",
            "The Mousetrap": "The Mousetrap is incorrect. The correct answer is The Mikado. The Mikado (1885) is one of the most famous comic operas written by W.S. Gilbert and Arthur Sullivan.",
            "The Mikado": "The Mikado is correct. The Mikado (1885) is one of the most famous comic operas written by W.S. Gilbert and Arthur Sullivan.",
        }
    },
    {
        question: "Where is Loch Lomond and the Trossachs National Park located?",
        answers: [
            "East of Scotland",
            "East of Wales",
            "West of Wales",
            "West of Scotland",
        ],
        correctAnswers: [
            "West of Scotland",
        ],
        explanation: "Loch Lomond and the Trossachs National Park is Scotland's first national park, located in the west of Scotland.",
        optionExplanations: {
            "East of Scotland": "East of Scotland is incorrect. The correct answer is West of Scotland. Loch Lomond and the Trossachs National Park is Scotland's first national park, located in the west of Scotland.",
            "East of Wales": "East of Wales is incorrect. The correct answer is West of Scotland. Loch Lomond and the Trossachs National Park is Scotland's first national park, located in the west of Scotland.",
            "West of Wales": "West of Wales is incorrect. The correct answer is West of Scotland. Loch Lomond and the Trossachs National Park is Scotland's first national park, located in the west of Scotland.",
            "West of Scotland": "West of Scotland is correct. Loch Lomond and the Trossachs National Park is Scotland's first national park, located in the west of Scotland.",
        }
    },
    {
        question: "Who was the first British Prime Minister?",
        answers: [
            "Henry Pelham",
            "Oliver Cromwell",
            "Admiral Nelson",
            "Sir Robert Walpole",
        ],
        correctAnswers: [
            "Sir Robert Walpole",
        ],
        explanation: "Sir Robert Walpole is recognised as the first Prime Minister of Great Britain, serving from 1721 to 1742.",
        optionExplanations: {
            "Henry Pelham": "Henry Pelham is incorrect. The correct answer is Sir Robert Walpole. Sir Robert Walpole is recognised as the first Prime Minister of Great Britain, serving from 1721 to 1742.",
            "Oliver Cromwell": "Oliver Cromwell is incorrect. The correct answer is Sir Robert Walpole. Sir Robert Walpole is recognised as the first Prime Minister of Great Britain, serving from 1721 to 1742.",
            "Admiral Nelson": "Admiral Nelson is incorrect. The correct answer is Sir Robert Walpole. Sir Robert Walpole is recognised as the first Prime Minister of Great Britain, serving from 1721 to 1742.",
            "Sir Robert Walpole": "Sir Robert Walpole is correct. Sir Robert Walpole is recognised as the first Prime Minister of Great Britain, serving from 1721 to 1742.",
        }
    },
    {
        question: "What day does Lent begin?",
        answers: [
            "Easter Sunday",
            "Shrove Tuesday",
            "Easter Monday",
            "Ash Wednesday",
        ],
        correctAnswers: [
            "Ash Wednesday",
        ],
        explanation: "Lent begins on Ash Wednesday, the day after Shrove Tuesday (Pancake Day), and lasts 40 days until Easter.",
        optionExplanations: {
            "Easter Sunday": "Easter Sunday is incorrect. The correct answer is Ash Wednesday. Lent begins on Ash Wednesday, the day after Shrove Tuesday (Pancake Day), and lasts 40 days until Easter.",
            "Shrove Tuesday": "Shrove Tuesday is incorrect. The correct answer is Ash Wednesday. Lent begins on Ash Wednesday, the day after Shrove Tuesday (Pancake Day), and lasts 40 days until Easter.",
            "Easter Monday": "Easter Monday is incorrect. The correct answer is Ash Wednesday. Lent begins on Ash Wednesday, the day after Shrove Tuesday (Pancake Day), and lasts 40 days until Easter.",
            "Ash Wednesday": "Ash Wednesday is correct. Lent begins on Ash Wednesday, the day after Shrove Tuesday (Pancake Day), and lasts 40 days until Easter.",
        }
    },
    {
        question: "How old do you need to be to apply for a free TV licence?",
        answers: [
            "Over 60",
            "Over 65",
            "Over 70",
            "Over 75",
        ],
        correctAnswers: [
            "Over 75",
        ],
        explanation: "People aged over 75 can apply for a free TV licence. Blind people can get a 50% discount at any age.",
        optionExplanations: {
            "Over 60": "Over 60 is incorrect. The correct answer is Over 75. People aged over 75 can apply for a free TV licence. Blind people can get a 50% discount at any age.",
            "Over 65": "Over 65 is incorrect. The correct answer is Over 75. People aged over 75 can apply for a free TV licence. Blind people can get a 50% discount at any age.",
            "Over 70": "Over 70 is incorrect. The correct answer is Over 75. People aged over 75 can apply for a free TV licence. Blind people can get a 50% discount at any age.",
            "Over 75": "Over 75 is correct. People aged over 75 can apply for a free TV licence. Blind people can get a 50% discount at any age.",
        }
    },
];

const extraQuestionsRaw = [
    {
        question: "What is the official home of the Prime Minister?",
        answers: [
            "Buckingham Palace",
            "Windsor Castle",
            "21 Oxford Street",
            "10 Downing Street",
        ],
        correctAnswers: [
            "10 Downing Street",
        ],
        explanation: "10 Downing Street is the official residence of the Prime Minister of the United Kingdom.",
        optionExplanations: {
            "Buckingham Palace": "Buckingham Palace is incorrect. The correct answer is 10 Downing Street. 10 Downing Street is the official residence of the Prime Minister of the United Kingdom.",
            "Windsor Castle": "Windsor Castle is incorrect. The correct answer is 10 Downing Street. 10 Downing Street is the official residence of the Prime Minister of the United Kingdom.",
            "21 Oxford Street": "21 Oxford Street is incorrect. The correct answer is 10 Downing Street. 10 Downing Street is the official residence of the Prime Minister of the United Kingdom.",
            "10 Downing Street": "10 Downing Street is correct. 10 Downing Street is the official residence of the Prime Minister of the United Kingdom.",
        }
    },
    {
        question: "Which British sportswoman won two gold medals for running at the 2004 Olympic Games?",
        answers: [
            "Jayne Torvill",
            "Jessica Ennis-Hill",
            "Dame Ellen MacArthur",
            "Dame Kelly Holmes",
        ],
        correctAnswers: [
            "Dame Kelly Holmes",
        ],
        explanation: "Dame Kelly Holmes won two gold medals in the 800m and 1500m events at the 2004 Athens Olympics.",
        optionExplanations: {
            "Jayne Torvill": "Jayne Torvill is incorrect. The correct answer is Dame Kelly Holmes. Dame Kelly Holmes won two gold medals in the 800m and 1500m events at the 2004 Athens Olympics.",
            "Jessica Ennis-Hill": "Jessica Ennis-Hill is incorrect. The correct answer is Dame Kelly Holmes. Dame Kelly Holmes won two gold medals in the 800m and 1500m events at the 2004 Athens Olympics.",
            "Dame Ellen MacArthur": "Dame Ellen MacArthur is incorrect. The correct answer is Dame Kelly Holmes. Dame Kelly Holmes won two gold medals in the 800m and 1500m events at the 2004 Athens Olympics.",
            "Dame Kelly Holmes": "Dame Kelly Holmes is correct. Dame Kelly Holmes won two gold medals in the 800m and 1500m events at the 2004 Athens Olympics.",
        }
    },
    {
        question: "What percentage of the UK's total population lives in England?",
        answers: [
            "60%",
            "58%",
            "79%",
            "84%",
        ],
        correctAnswers: [
            "84%",
        ],
        explanation: "Approximately 84% of the UK's population lives in England.",
        optionExplanations: {
            "60%": "60% is incorrect. The correct answer is 84%. Approximately 84% of the UK's population lives in England.",
            "58%": "58% is incorrect. The correct answer is 84%. Approximately 84% of the UK's population lives in England.",
            "79%": "79% is incorrect. The correct answer is 84%. Approximately 84% of the UK's population lives in England.",
            "84%": "84% is correct. Approximately 84% of the UK's population lives in England.",
        }
    },
    {
        question: "What was the approximate population of the UK in 2010?",
        answers: [
            "Just over 50 million",
            "Just over 55 million",
            "Just over 62 million",
            "Just over 70 million",
        ],
        correctAnswers: [
            "Just over 62 million",
        ],
        explanation: "The UK's population was approximately 62 million in 2010.",
        optionExplanations: {
            "Just over 50 million": "Just over 50 million is incorrect. The correct answer is Just over 62 million. The UK's population was approximately 62 million in 2010.",
            "Just over 55 million": "Just over 55 million is incorrect. The correct answer is Just over 62 million. The UK's population was approximately 62 million in 2010.",
            "Just over 62 million": "Just over 62 million is correct. The UK's population was approximately 62 million in 2010.",
            "Just over 70 million": "Just over 70 million is incorrect. The correct answer is Just over 62 million. The UK's population was approximately 62 million in 2010.",
        }
    },
    {
        question: "What day is April Fool's Day?",
        answers: [
            "1st March",
            "1st February",
            "1st April",
            "1st May",
        ],
        correctAnswers: [
            "1st April",
        ],
        explanation: "April Fool's Day is celebrated on 1st April.",
        optionExplanations: {
            "1st March": "1st March is incorrect. The correct answer is 1st April. April Fool's Day is celebrated on 1st April.",
            "1st February": "1st February is incorrect. The correct answer is 1st April. April Fool's Day is celebrated on 1st April.",
            "1st April": "1st April is correct. April Fool's Day is celebrated on 1st April.",
            "1st May": "1st May is incorrect. The correct answer is 1st April. April Fool's Day is celebrated on 1st April.",
        }
    },
    {
        question: "Who is the fastest person to have sailed around the world single-handed?",
        answers: [
            "Dame Kelly Holmes",
            "Jayne Torvill",
            "Bradley Wiggins",
            "Dame Ellen MacArthur",
        ],
        correctAnswers: [
            "Dame Ellen MacArthur",
        ],
        explanation: "Dame Ellen MacArthur holds the record for the fastest solo circumnavigation of the globe.",
        optionExplanations: {
            "Dame Kelly Holmes": "Dame Kelly Holmes is incorrect. The correct answer is Dame Ellen MacArthur. Dame Ellen MacArthur holds the record for the fastest solo circumnavigation of the globe.",
            "Jayne Torvill": "Jayne Torvill is incorrect. The correct answer is Dame Ellen MacArthur. Dame Ellen MacArthur holds the record for the fastest solo circumnavigation of the globe.",
            "Bradley Wiggins": "Bradley Wiggins is incorrect. The correct answer is Dame Ellen MacArthur. Dame Ellen MacArthur holds the record for the fastest solo circumnavigation of the globe.",
            "Dame Ellen MacArthur": "Dame Ellen MacArthur is correct. Dame Ellen MacArthur holds the record for the fastest solo circumnavigation of the globe.",
        }
    },
    {
        question: "What are Welsh cakes traditionally made from?",
        answers: [
            "Suet, onions and oatmeal",
            "Bacon, eggs and potato bread",
            "Potatoes and vegetables",
            "Flour, dried fruits and spices",
        ],
        correctAnswers: [
            "Flour, dried fruits and spices",
        ],
        explanation: "Welsh cakes are traditionally made from flour, dried fruits, and spices.",
        optionExplanations: {
            "Suet, onions and oatmeal": "Suet, onions and oatmeal is incorrect. The correct answer is Flour, dried fruits and spices. Welsh cakes are traditionally made from flour, dried fruits, and spices.",
            "Bacon, eggs and potato bread": "Bacon, eggs and potato bread is incorrect. The correct answer is Flour, dried fruits and spices. Welsh cakes are traditionally made from flour, dried fruits, and spices.",
            "Potatoes and vegetables": "Potatoes and vegetables is incorrect. The correct answer is Flour, dried fruits and spices. Welsh cakes are traditionally made from flour, dried fruits, and spices.",
            "Flour, dried fruits and spices": "Flour, dried fruits and spices is correct. Welsh cakes are traditionally made from flour, dried fruits, and spices.",
        }
    },
    {
        question: "Where is the London Eye situated?",
        answers: [
            "On the northern bank of the River Thames",
            "On the northern bank of the River Lea",
            "On the southern bank of the River Lea",
            "On the southern bank of the River Thames",
        ],
        correctAnswers: [
            "On the southern bank of the River Thames",
        ],
        explanation: "The London Eye is located on the southern bank of the River Thames.",
        optionExplanations: {
            "On the northern bank of the River Thames": "On the northern bank of the River Thames is incorrect. The correct answer is On the southern bank of the River Thames. The London Eye is located on the southern bank of the River Thames.",
            "On the northern bank of the River Lea": "On the northern bank of the River Lea is incorrect. The correct answer is On the southern bank of the River Thames. The London Eye is located on the southern bank of the River Thames.",
            "On the southern bank of the River Lea": "On the southern bank of the River Lea is incorrect. The correct answer is On the southern bank of the River Thames. The London Eye is located on the southern bank of the River Thames.",
            "On the southern bank of the River Thames": "On the southern bank of the River Thames is correct. The London Eye is located on the southern bank of the River Thames.",
        }
    },
    {
        question: "What is the role of the monarch in relation to the government?",
        answers: [
            "Approve all government decisions",
            "Override the Prime Minister on key policy",
            "Advise, warn and encourage the government",
            "Appoint all ministers directly",
        ],
        correctAnswers: [
            "Advise, warn and encourage the government",
        ],
        explanation: "The monarch's role is to advise, warn, and encourage the government.",
        optionExplanations: {
            "Approve all government decisions": "Approve all government decisions is incorrect. The correct answer is Advise, warn and encourage the government. The monarch's role is to advise, warn, and encourage the government.",
            "Override the Prime Minister on key policy": "Override the Prime Minister on key policy is incorrect. The correct answer is Advise, warn and encourage the government. The monarch's role is to advise, warn, and encourage the government.",
            "Advise, warn and encourage the government": "Advise, warn and encourage the government is correct. The monarch's role is to advise, warn, and encourage the government.",
            "Appoint all ministers directly": "Appoint all ministers directly is incorrect. The correct answer is Advise, warn and encourage the government. The monarch's role is to advise, warn, and encourage the government.",
        }
    },
    {
        question: "The UK is a:",
        answers: [
            "Federal Republic",
            "Direct Democracy",
            "Constitutional Monarchy",
            "Presidential Democracy",
        ],
        correctAnswers: [
            "Constitutional Monarchy",
        ],
        explanation: "The UK is a constitutional monarchy.",
        optionExplanations: {
            "Federal Republic": "Federal Republic is incorrect. The correct answer is Constitutional Monarchy. The UK is a constitutional monarchy.",
            "Direct Democracy": "Direct Democracy is incorrect. The correct answer is Constitutional Monarchy. The UK is a constitutional monarchy.",
            "Constitutional Monarchy": "Constitutional Monarchy is correct. The UK is a constitutional monarchy.",
            "Presidential Democracy": "Presidential Democracy is incorrect. The correct answer is Constitutional Monarchy. The UK is a constitutional monarchy.",
        }
    },
    {
        question: "What do you need to apply to become a permanent resident or citizen of the UK? (Choose TWO)",
        answers: [
            "A British driving licence",
            "A British university degree",
            "To be able to speak and read English",
            "A good understanding of life in the UK",
        ],
        correctAnswers: [
            "To be able to speak and read English",
            "A good understanding of life in the UK",
        ],
        explanation: "To become a permanent resident or citizen, you need to speak and read English and have a good understanding of life in the UK.",
        optionExplanations: {
            "A British driving licence": "A British driving licence is incorrect. The correct answer is To be able to speak and read English, A good understanding of life in the UK. To become a permanent resident or citizen, you need to speak and read English and have a good understanding of life in the UK.",
            "A British university degree": "A British university degree is incorrect. The correct answer is To be able to speak and read English, A good understanding of life in the UK. To become a permanent resident or citizen, you need to speak and read English and have a good understanding of life in the UK.",
            "To be able to speak and read English": "To be able to speak and read English is correct. To become a permanent resident or citizen, you need to speak and read English and have a good understanding of life in the UK.",
            "A good understanding of life in the UK": "A good understanding of life in the UK is correct. To become a permanent resident or citizen, you need to speak and read English and have a good understanding of life in the UK.",
        }
    },
    {
        question: "Which British scientist was awarded a Nobel Prize for discovering the structure of the DNA molecule?",
        answers: [
            "Alan Turing",
            "Sir Frank Whittle",
            "Sir Christopher Cockerell",
            "Francis Crick",
        ],
        correctAnswers: [
            "Francis Crick",
        ],
        explanation: "Francis Crick, along with James Watson, discovered the structure of DNA and was awarded the Nobel Prize.",
        optionExplanations: {
            "Alan Turing": "Alan Turing is incorrect. The correct answer is Francis Crick. Francis Crick, along with James Watson, discovered the structure of DNA and was awarded the Nobel Prize.",
            "Sir Frank Whittle": "Sir Frank Whittle is incorrect. The correct answer is Francis Crick. Francis Crick, along with James Watson, discovered the structure of DNA and was awarded the Nobel Prize.",
            "Sir Christopher Cockerell": "Sir Christopher Cockerell is incorrect. The correct answer is Francis Crick. Francis Crick, along with James Watson, discovered the structure of DNA and was awarded the Nobel Prize.",
            "Francis Crick": "Francis Crick is correct. Francis Crick, along with James Watson, discovered the structure of DNA and was awarded the Nobel Prize.",
        }
    },
    {
        question: "How long before Easter does Lent take place?",
        answers: [
            "40 days after Easter",
            "40 days before Christmas",
            "40 days after Christmas",
            "40 days before Easter",
        ],
        correctAnswers: [
            "40 days before Easter",
        ],
        explanation: "Lent occurs 40 days before Easter.",
        optionExplanations: {
            "40 days after Easter": "40 days after Easter is incorrect. The correct answer is 40 days before Easter. Lent occurs 40 days before Easter.",
            "40 days before Christmas": "40 days before Christmas is incorrect. The correct answer is 40 days before Easter. Lent occurs 40 days before Easter.",
            "40 days after Christmas": "40 days after Christmas is incorrect. The correct answer is 40 days before Easter. Lent occurs 40 days before Easter.",
            "40 days before Easter": "40 days before Easter is correct. Lent occurs 40 days before Easter.",
        }
    },
    {
        question: "Which of the following national galleries is NOT located in London?",
        answers: [
            "Tate Britain",
            "The National Gallery",
            "Tate Modern",
            "The National Museum (Cardiff)",
        ],
        correctAnswers: [
            "The National Museum (Cardiff)",
        ],
        explanation: "The National Museum Cardiff is located in Cardiff, Wales, not London.",
        optionExplanations: {
            "Tate Britain": "Tate Britain is incorrect. The correct answer is The National Museum (Cardiff). The National Museum Cardiff is located in Cardiff, Wales, not London.",
            "The National Gallery": "The National Gallery is incorrect. The correct answer is The National Museum (Cardiff). The National Museum Cardiff is located in Cardiff, Wales, not London.",
            "Tate Modern": "Tate Modern is incorrect. The correct answer is The National Museum (Cardiff). The National Museum Cardiff is located in Cardiff, Wales, not London.",
            "The National Museum (Cardiff)": "The National Museum (Cardiff) is correct. The National Museum Cardiff is located in Cardiff, Wales, not London.",
        }
    },
    {
        question: "How much can you be fined for watching TV without a licence?",
        answers: [
            "Up to £500",
            "Up to £2,000",
            "Up to £3,000",
            "Up to £1,000",
        ],
        correctAnswers: [
            "Up to £1,000",
        ],
        explanation: "The fine for watching TV without a licence can be up to £1,000.",
        optionExplanations: {
            "Up to £500": "Up to £500 is incorrect. The correct answer is Up to £1,000. The fine for watching TV without a licence can be up to £1,000.",
            "Up to £2,000": "Up to £2,000 is incorrect. The correct answer is Up to £1,000. The fine for watching TV without a licence can be up to £1,000.",
            "Up to £3,000": "Up to £3,000 is incorrect. The correct answer is Up to £1,000. The fine for watching TV without a licence can be up to £1,000.",
            "Up to £1,000": "Up to £1,000 is correct. The fine for watching TV without a licence can be up to £1,000.",
        }
    },
    {
        question: "How old is the clock at the Houses of Parliament, known as \"Big Ben\"?",
        answers: [
            "100 years old",
            "200 years old",
            "250 years old",
            "Over 150 years old",
        ],
        correctAnswers: [
            "Over 150 years old",
        ],
        explanation: "Big Ben is over 150 years old, installed in 1859.",
        optionExplanations: {
            "100 years old": "100 years old is incorrect. The correct answer is Over 150 years old. Big Ben is over 150 years old, installed in 1859.",
            "200 years old": "200 years old is incorrect. The correct answer is Over 150 years old. Big Ben is over 150 years old, installed in 1859.",
            "250 years old": "250 years old is incorrect. The correct answer is Over 150 years old. Big Ben is over 150 years old, installed in 1859.",
            "Over 150 years old": "Over 150 years old is correct. Big Ben is over 150 years old, installed in 1859.",
        }
    },
    {
        question: "The UK was a full member of the EU but did not use the Euro currency. True or False?",
        answers: [
            "True",
            "False",
            "Only Scotland used the Euro",
            "Only England used the Euro",
        ],
        correctAnswers: [
            "True",
        ],
        explanation: "The UK was a member of the EU but retained the pound sterling instead of adopting the euro.",
        optionExplanations: {
            "True": "True is correct. The UK was a member of the EU but retained the pound sterling instead of adopting the euro.",
            "False": "False is incorrect. The correct answer is True. The UK was a member of the EU but retained the pound sterling instead of adopting the euro.",
            "Only Scotland used the Euro": "Only Scotland used the Euro is incorrect. The correct answer is True. The UK was a member of the EU but retained the pound sterling instead of adopting the euro.",
            "Only England used the Euro": "Only England used the Euro is incorrect. The correct answer is True. The UK was a member of the EU but retained the pound sterling instead of adopting the euro.",
        }
    },
    {
        question: "NATO was created with which TWO purposes?",
        answers: [
            "Promote free trade",
            "Help each other if they come under attack",
            "Promote human rights globally",
            "Maintain peace between all its members",
        ],
        correctAnswers: [
            "Help each other if they come under attack",
            "Maintain peace between all its members",
        ],
        explanation: "NATO was created to help member countries defend against attacks and maintain peace.",
        optionExplanations: {
            "Promote free trade": "Promote free trade is incorrect. The correct answer is Help each other if they come under attack, Maintain peace between all its members. NATO was created to help member countries defend against attacks and maintain peace.",
            "Help each other if they come under attack": "Help each other if they come under attack is correct. NATO was created to help member countries defend against attacks and maintain peace.",
            "Promote human rights globally": "Promote human rights globally is incorrect. The correct answer is Help each other if they come under attack, Maintain peace between all its members. NATO was created to help member countries defend against attacks and maintain peace.",
            "Maintain peace between all its members": "Maintain peace between all its members is correct. NATO was created to help member countries defend against attacks and maintain peace.",
        }
    },
    {
        question: "The small claims procedure in England and Wales is used for claims of less than:",
        answers: [
            "£15,000",
            "£10,000",
            "£1,000",
            "£5,000",
        ],
        correctAnswers: [
            "£5,000",
        ],
        explanation: "The small claims procedure is for claims under £5,000 in England and Wales.",
        optionExplanations: {
            "£15,000": "£15,000 is incorrect. The correct answer is £5,000. The small claims procedure is for claims under £5,000 in England and Wales.",
            "£10,000": "£10,000 is incorrect. The correct answer is £5,000. The small claims procedure is for claims under £5,000 in England and Wales.",
            "£1,000": "£1,000 is incorrect. The correct answer is £5,000. The small claims procedure is for claims under £5,000 in England and Wales.",
            "£5,000": "£5,000 is correct. The small claims procedure is for claims under £5,000 in England and Wales.",
        }
    },
    {
        question: "What sport was invented in Britain and exported to the rest of the world?",
        answers: [
            "Basketball",
            "Cricket",
            "Volleyball",
            "Baseball",
        ],
        correctAnswers: [
            "Cricket",
        ],
        explanation: "Cricket was invented in England and spread globally.",
        optionExplanations: {
            "Basketball": "Basketball is incorrect. The correct answer is Cricket. Cricket was invented in England and spread globally.",
            "Cricket": "Cricket is correct. Cricket was invented in England and spread globally.",
            "Volleyball": "Volleyball is incorrect. The correct answer is Cricket. Cricket was invented in England and spread globally.",
            "Baseball": "Baseball is incorrect. The correct answer is Cricket. Cricket was invented in England and spread globally.",
        }
    },
    {
        question: "Which monarch was responsible for the Domesday Book?",
        answers: [
            "King Harold",
            "King Richard I",
            "King Edward the Confessor",
            "William the Conqueror",
        ],
        correctAnswers: [
            "William the Conqueror",
        ],
        explanation: "William the Conqueror commissioned the Domesday Book in 1086.",
        optionExplanations: {
            "King Harold": "King Harold is incorrect. The correct answer is William the Conqueror. William the Conqueror commissioned the Domesday Book in 1086.",
            "King Richard I": "King Richard I is incorrect. The correct answer is William the Conqueror. William the Conqueror commissioned the Domesday Book in 1086.",
            "King Edward the Confessor": "King Edward the Confessor is incorrect. The correct answer is William the Conqueror. William the Conqueror commissioned the Domesday Book in 1086.",
            "William the Conqueror": "William the Conqueror is correct. William the Conqueror commissioned the Domesday Book in 1086.",
        }
    },
    {
        question: "When was the Magna Carta signed?",
        answers: [
            "1150",
            "1215",
            "1265",
            "1300",
        ],
        correctAnswers: [
            "1215",
        ],
        explanation: "The Magna Carta was signed in 1215 by King John.",
        optionExplanations: {
            "1150": "1150 is incorrect. The correct answer is 1215. The Magna Carta was signed in 1215 by King John.",
            "1215": "1215 is correct. The Magna Carta was signed in 1215 by King John.",
            "1265": "1265 is incorrect. The correct answer is 1215. The Magna Carta was signed in 1215 by King John.",
            "1300": "1300 is incorrect. The correct answer is 1215. The Magna Carta was signed in 1215 by King John.",
        }
    },
    {
        question: "What is the currency of the UK?",
        answers: [
            "Euro",
            "Dollar",
            "Pound Sterling",
            "Franc",
        ],
        correctAnswers: [
            "Pound Sterling",
        ],
        explanation: "The UK's currency is the pound sterling.",
        optionExplanations: {
            "Euro": "Euro is incorrect. The correct answer is Pound Sterling. The UK's currency is the pound sterling.",
            "Dollar": "Dollar is incorrect. The correct answer is Pound Sterling. The UK's currency is the pound sterling.",
            "Pound Sterling": "Pound Sterling is correct. The UK's currency is the pound sterling.",
            "Franc": "Franc is incorrect. The correct answer is Pound Sterling. The UK's currency is the pound sterling.",
        }
    },
    {
        question: "Which patron saint is celebrated on 1 March?",
        answers: [
            "St Andrew",
            "St George",
            "St Patrick",
            "St David",
        ],
        correctAnswers: [
            "St David",
        ],
        explanation: "St David, the patron saint of Wales, is celebrated on 1 March.",
        optionExplanations: {
            "St Andrew": "St Andrew is incorrect. The correct answer is St David. St David, the patron saint of Wales, is celebrated on 1 March.",
            "St George": "St George is incorrect. The correct answer is St David. St David, the patron saint of Wales, is celebrated on 1 March.",
            "St Patrick": "St Patrick is incorrect. The correct answer is St David. St David, the patron saint of Wales, is celebrated on 1 March.",
            "St David": "St David is correct. St David, the patron saint of Wales, is celebrated on 1 March.",
        }
    },
    {
        question: "Which patron saint is celebrated on 23 April?",
        answers: [
            "St David",
            "St Andrew",
            "St Patrick",
            "St George",
        ],
        correctAnswers: [
            "St George",
        ],
        explanation: "St George, the patron saint of England, is celebrated on 23 April.",
        optionExplanations: {
            "St David": "St David is incorrect. The correct answer is St George. St George, the patron saint of England, is celebrated on 23 April.",
            "St Andrew": "St Andrew is incorrect. The correct answer is St George. St George, the patron saint of England, is celebrated on 23 April.",
            "St Patrick": "St Patrick is incorrect. The correct answer is St George. St George, the patron saint of England, is celebrated on 23 April.",
            "St George": "St George is correct. St George, the patron saint of England, is celebrated on 23 April.",
        }
    },
    {
        question: "Which patron saint is celebrated on 30 November?",
        answers: [
            "St David",
            "St George",
            "St Patrick",
            "St Andrew",
        ],
        correctAnswers: [
            "St Andrew",
        ],
        explanation: "St Andrew, the patron saint of Scotland, is celebrated on 30 November.",
        optionExplanations: {
            "St David": "St David is incorrect. The correct answer is St Andrew. St Andrew, the patron saint of Scotland, is celebrated on 30 November.",
            "St George": "St George is incorrect. The correct answer is St Andrew. St Andrew, the patron saint of Scotland, is celebrated on 30 November.",
            "St Patrick": "St Patrick is incorrect. The correct answer is St Andrew. St Andrew, the patron saint of Scotland, is celebrated on 30 November.",
            "St Andrew": "St Andrew is correct. St Andrew, the patron saint of Scotland, is celebrated on 30 November.",
        }
    },
    {
        question: "Which patron saint is celebrated on 17 March?",
        answers: [
            "St David",
            "St George",
            "St Andrew",
            "St Patrick",
        ],
        correctAnswers: [
            "St Patrick",
        ],
        explanation: "St Patrick, the patron saint of Ireland, is celebrated on 17 March.",
        optionExplanations: {
            "St David": "St David is incorrect. The correct answer is St Patrick. St Patrick, the patron saint of Ireland, is celebrated on 17 March.",
            "St George": "St George is incorrect. The correct answer is St Patrick. St Patrick, the patron saint of Ireland, is celebrated on 17 March.",
            "St Andrew": "St Andrew is incorrect. The correct answer is St Patrick. St Patrick, the patron saint of Ireland, is celebrated on 17 March.",
            "St Patrick": "St Patrick is correct. St Patrick, the patron saint of Ireland, is celebrated on 17 March.",
        }
    },
    {
        question: "How many members are there in the House of Commons?",
        answers: [
            "500",
            "550",
            "650",
            "700",
        ],
        correctAnswers: [
            "650",
        ],
        explanation: "The House of Commons has 650 members.",
        optionExplanations: {
            "500": "500 is incorrect. The correct answer is 650. The House of Commons has 650 members.",
            "550": "550 is incorrect. The correct answer is 650. The House of Commons has 650 members.",
            "650": "650 is correct. The House of Commons has 650 members.",
            "700": "700 is incorrect. The correct answer is 650. The House of Commons has 650 members.",
        }
    },
    {
        question: "What is the name of the upper house of the UK Parliament?",
        answers: [
            "The Senate",
            "The House of Commons",
            "The House of Lords",
            "The Cabinet",
        ],
        correctAnswers: [
            "The House of Lords",
        ],
        explanation: "The upper house of the UK Parliament is the House of Lords.",
        optionExplanations: {
            "The Senate": "The Senate is incorrect. The correct answer is The House of Lords. The upper house of the UK Parliament is the House of Lords.",
            "The House of Commons": "The House of Commons is incorrect. The correct answer is The House of Lords. The upper house of the UK Parliament is the House of Lords.",
            "The House of Lords": "The House of Lords is correct. The upper house of the UK Parliament is the House of Lords.",
            "The Cabinet": "The Cabinet is incorrect. The correct answer is The House of Lords. The upper house of the UK Parliament is the House of Lords.",
        }
    },
    {
        question: "How often must a general election be held in the UK?",
        answers: [
            "Every 3 years",
            "Every 4 years",
            "Every 5 years",
            "Every 6 years",
        ],
        correctAnswers: [
            "Every 5 years",
        ],
        explanation: "General elections must be held at least every 5 years.",
        optionExplanations: {
            "Every 3 years": "Every 3 years is incorrect. The correct answer is Every 5 years. General elections must be held at least every 5 years.",
            "Every 4 years": "Every 4 years is incorrect. The correct answer is Every 5 years. General elections must be held at least every 5 years.",
            "Every 5 years": "Every 5 years is correct. General elections must be held at least every 5 years.",
            "Every 6 years": "Every 6 years is incorrect. The correct answer is Every 5 years. General elections must be held at least every 5 years.",
        }
    },
    {
        question: "In the UK, what is the minimum voting age?",
        answers: [
            "16",
            "18",
            "20",
            "21",
        ],
        correctAnswers: [
            "18",
        ],
        explanation: "The minimum voting age in the UK is 18.",
        optionExplanations: {
            "16": "16 is incorrect. The correct answer is 18. The minimum voting age in the UK is 18.",
            "18": "18 is correct. The minimum voting age in the UK is 18.",
            "20": "20 is incorrect. The correct answer is 18. The minimum voting age in the UK is 18.",
            "21": "21 is incorrect. The correct answer is 18. The minimum voting age in the UK is 18.",
        }
    },
    {
        question: "When were women in the UK first given the right to vote?",
        answers: [
            "1900",
            "1911",
            "1918",
            "1928",
        ],
        correctAnswers: [
            "1918",
        ],
        explanation: "Women over 30 gained the right to vote in 1918.",
        optionExplanations: {
            "1900": "1900 is incorrect. The correct answer is 1918. Women over 30 gained the right to vote in 1918.",
            "1911": "1911 is incorrect. The correct answer is 1918. Women over 30 gained the right to vote in 1918.",
            "1918": "1918 is correct. Women over 30 gained the right to vote in 1918.",
            "1928": "1928 is incorrect. The correct answer is 1918. Women over 30 gained the right to vote in 1918.",
        }
    },
    {
        question: "In which year did women gain the right to vote on equal terms with men in the UK?",
        answers: [
            "1918",
            "1925",
            "1928",
            "1930",
        ],
        correctAnswers: [
            "1928",
        ],
        explanation: "Women gained equal voting rights with men in 1928.",
        optionExplanations: {
            "1918": "1918 is incorrect. The correct answer is 1928. Women gained equal voting rights with men in 1928.",
            "1925": "1925 is incorrect. The correct answer is 1928. Women gained equal voting rights with men in 1928.",
            "1928": "1928 is correct. Women gained equal voting rights with men in 1928.",
            "1930": "1930 is incorrect. The correct answer is 1928. Women gained equal voting rights with men in 1928.",
        }
    },
    {
        question: "Who led the campaign for women's suffrage in the UK?",
        answers: [
            "Florence Nightingale",
            "Marie Curie",
            "Emmeline Pankhurst",
            "Mary Wollstonecraft",
        ],
        correctAnswers: [
            "Emmeline Pankhurst",
        ],
        explanation: "Emmeline Pankhurst led the women's suffrage movement in the UK.",
        optionExplanations: {
            "Florence Nightingale": "Florence Nightingale is incorrect. The correct answer is Emmeline Pankhurst. Emmeline Pankhurst led the women's suffrage movement in the UK.",
            "Marie Curie": "Marie Curie is incorrect. The correct answer is Emmeline Pankhurst. Emmeline Pankhurst led the women's suffrage movement in the UK.",
            "Emmeline Pankhurst": "Emmeline Pankhurst is correct. Emmeline Pankhurst led the women's suffrage movement in the UK.",
            "Mary Wollstonecraft": "Mary Wollstonecraft is incorrect. The correct answer is Emmeline Pankhurst. Emmeline Pankhurst led the women's suffrage movement in the UK.",
        }
    },
    {
        question: "What is Remembrance Day commemorated on?",
        answers: [
            "1st November",
            "11th November",
            "11th October",
            "1st December",
        ],
        correctAnswers: [
            "11th November",
        ],
        explanation: "Remembrance Day is commemorated on 11th November.",
        optionExplanations: {
            "1st November": "1st November is incorrect. The correct answer is 11th November. Remembrance Day is commemorated on 11th November.",
            "11th November": "11th November is correct. Remembrance Day is commemorated on 11th November.",
            "11th October": "11th October is incorrect. The correct answer is 11th November. Remembrance Day is commemorated on 11th November.",
            "1st December": "1st December is incorrect. The correct answer is 11th November. Remembrance Day is commemorated on 11th November.",
        }
    },
    {
        question: "What is the name of the devolved parliament in Scotland?",
        answers: [
            "The Dáil",
            "The Senedd",
            "The Scottish Parliament",
            "The Welsh Assembly",
        ],
        correctAnswers: [
            "The Scottish Parliament",
        ],
        explanation: "Scotland's devolved parliament is called the Scottish Parliament.",
        optionExplanations: {
            "The Dáil": "The Dáil is incorrect. The correct answer is The Scottish Parliament. Scotland's devolved parliament is called the Scottish Parliament.",
            "The Senedd": "The Senedd is incorrect. The correct answer is The Scottish Parliament. Scotland's devolved parliament is called the Scottish Parliament.",
            "The Scottish Parliament": "The Scottish Parliament is correct. Scotland's devolved parliament is called the Scottish Parliament.",
            "The Welsh Assembly": "The Welsh Assembly is incorrect. The correct answer is The Scottish Parliament. Scotland's devolved parliament is called the Scottish Parliament.",
        }
    },
    {
        question: "The devolved parliament in Wales is called:",
        answers: [
            "The Scottish Parliament",
            "The Dáil",
            "The Welsh Parliament",
            "The Senedd",
        ],
        correctAnswers: [
            "The Senedd",
        ],
        explanation: "Wales' devolved parliament is called the Senedd.",
        optionExplanations: {
            "The Scottish Parliament": "The Scottish Parliament is incorrect. The correct answer is The Senedd. Wales' devolved parliament is called the Senedd.",
            "The Dáil": "The Dáil is incorrect. The correct answer is The Senedd. Wales' devolved parliament is called the Senedd.",
            "The Welsh Parliament": "The Welsh Parliament is incorrect. The correct answer is The Senedd. Wales' devolved parliament is called the Senedd.",
            "The Senedd": "The Senedd is correct. Wales' devolved parliament is called the Senedd.",
        }
    },
    {
        question: "Where is the Scottish Parliament based?",
        answers: [
            "Glasgow",
            "Edinburgh",
            "Aberdeen",
            "Dundee",
        ],
        correctAnswers: [
            "Edinburgh",
        ],
        explanation: "The Scottish Parliament is based in Edinburgh.",
        optionExplanations: {
            "Glasgow": "Glasgow is incorrect. The correct answer is Edinburgh. The Scottish Parliament is based in Edinburgh.",
            "Edinburgh": "Edinburgh is correct. The Scottish Parliament is based in Edinburgh.",
            "Aberdeen": "Aberdeen is incorrect. The correct answer is Edinburgh. The Scottish Parliament is based in Edinburgh.",
            "Dundee": "Dundee is incorrect. The correct answer is Edinburgh. The Scottish Parliament is based in Edinburgh.",
        }
    },
    {
        question: "Where is the Senedd (Welsh Parliament) based?",
        answers: [
            "Swansea",
            "Newport",
            "Cardiff",
            "Wrexham",
        ],
        correctAnswers: [
            "Cardiff",
        ],
        explanation: "The Senedd is based in Cardiff.",
        optionExplanations: {
            "Swansea": "Swansea is incorrect. The correct answer is Cardiff. The Senedd is based in Cardiff.",
            "Newport": "Newport is incorrect. The correct answer is Cardiff. The Senedd is based in Cardiff.",
            "Cardiff": "Cardiff is correct. The Senedd is based in Cardiff.",
            "Wrexham": "Wrexham is incorrect. The correct answer is Cardiff. The Senedd is based in Cardiff.",
        }
    },
    {
        question: "What is the National Anthem of the UK?",
        answers: [
            "Rule Britannia",
            "Land of Hope and Glory",
            "Jerusalem",
            "God Save the King",
        ],
        correctAnswers: [
            "God Save the King",
        ],
        explanation: "The UK's national anthem is 'God Save the King'.",
        optionExplanations: {
            "Rule Britannia": "Rule Britannia is incorrect. The correct answer is God Save the King. The UK's national anthem is 'God Save the King'.",
            "Land of Hope and Glory": "Land of Hope and Glory is incorrect. The correct answer is God Save the King. The UK's national anthem is 'God Save the King'.",
            "Jerusalem": "Jerusalem is incorrect. The correct answer is God Save the King. The UK's national anthem is 'God Save the King'.",
            "God Save the King": "God Save the King is correct. The UK's national anthem is 'God Save the King'.",
        }
    },
    {
        question: "Who is the Head of State of the UK?",
        answers: [
            "The Prime Minister",
            "The Archbishop of Canterbury",
            "The Speaker of the House of Commons",
            "The Monarch",
        ],
        correctAnswers: [
            "The Monarch",
        ],
        explanation: "The Head of State of the UK is the Monarch.",
        optionExplanations: {
            "The Prime Minister": "The Prime Minister is incorrect. The correct answer is The Monarch. The Head of State of the UK is the Monarch.",
            "The Archbishop of Canterbury": "The Archbishop of Canterbury is incorrect. The correct answer is The Monarch. The Head of State of the UK is the Monarch.",
            "The Speaker of the House of Commons": "The Speaker of the House of Commons is incorrect. The correct answer is The Monarch. The Head of State of the UK is the Monarch.",
            "The Monarch": "The Monarch is correct. The Head of State of the UK is the Monarch.",
        }
    },
    {
        question: "Which battle in 1066 led to the Norman conquest of England?",
        answers: [
            "The Battle of Bosworth",
            "The Battle of Agincourt",
            "The Battle of Hastings",
            "The Battle of Stamford Bridge",
        ],
        correctAnswers: [
            "The Battle of Hastings",
        ],
        explanation: "The Battle of Hastings in 1066 led to the Norman conquest.",
        optionExplanations: {
            "The Battle of Bosworth": "The Battle of Bosworth is incorrect. The correct answer is The Battle of Hastings. The Battle of Hastings in 1066 led to the Norman conquest.",
            "The Battle of Agincourt": "The Battle of Agincourt is incorrect. The correct answer is The Battle of Hastings. The Battle of Hastings in 1066 led to the Norman conquest.",
            "The Battle of Hastings": "The Battle of Hastings is correct. The Battle of Hastings in 1066 led to the Norman conquest.",
            "The Battle of Stamford Bridge": "The Battle of Stamford Bridge is incorrect. The correct answer is The Battle of Hastings. The Battle of Hastings in 1066 led to the Norman conquest.",
        }
    },
    {
        question: "What was the name of the document signed in 1215 that limited the power of the king?",
        answers: [
            "The Bill of Rights",
            "The Act of Union",
            "The Petition of Right",
            "Magna Carta",
        ],
        correctAnswers: [
            "Magna Carta",
        ],
        explanation: "The Magna Carta, signed in 1215, limited the king's power.",
        optionExplanations: {
            "The Bill of Rights": "The Bill of Rights is incorrect. The correct answer is Magna Carta. The Magna Carta, signed in 1215, limited the king's power.",
            "The Act of Union": "The Act of Union is incorrect. The correct answer is Magna Carta. The Magna Carta, signed in 1215, limited the king's power.",
            "The Petition of Right": "The Petition of Right is incorrect. The correct answer is Magna Carta. The Magna Carta, signed in 1215, limited the king's power.",
            "Magna Carta": "Magna Carta is correct. The Magna Carta, signed in 1215, limited the king's power.",
        }
    },
    {
        question: "Which century did the Industrial Revolution begin in Britain?",
        answers: [
            "16th century",
            "17th century",
            "18th century",
            "19th century",
        ],
        correctAnswers: [
            "18th century",
        ],
        explanation: "The Industrial Revolution began in Britain in the 18th century.",
        optionExplanations: {
            "16th century": "16th century is incorrect. The correct answer is 18th century. The Industrial Revolution began in Britain in the 18th century.",
            "17th century": "17th century is incorrect. The correct answer is 18th century. The Industrial Revolution began in Britain in the 18th century.",
            "18th century": "18th century is correct. The Industrial Revolution began in Britain in the 18th century.",
            "19th century": "19th century is incorrect. The correct answer is 18th century. The Industrial Revolution began in Britain in the 18th century.",
        }
    },
    {
        question: "Which inventor is associated with the development of the steam engine, greatly improving it?",
        answers: [
            "Isambard Kingdom Brunel",
            "Richard Arkwright",
            "James Watt",
            "George Stephenson",
        ],
        correctAnswers: [
            "James Watt",
        ],
        explanation: "James Watt greatly improved the steam engine.",
        optionExplanations: {
            "Isambard Kingdom Brunel": "Isambard Kingdom Brunel is incorrect. The correct answer is James Watt. James Watt greatly improved the steam engine.",
            "Richard Arkwright": "Richard Arkwright is incorrect. The correct answer is James Watt. James Watt greatly improved the steam engine.",
            "James Watt": "James Watt is correct. James Watt greatly improved the steam engine.",
            "George Stephenson": "George Stephenson is incorrect. The correct answer is James Watt. James Watt greatly improved the steam engine.",
        }
    },
    {
        question: "Which disease killed around one third of the population of Britain in 1348?",
        answers: [
            "Smallpox",
            "Cholera",
            "Typhoid",
            "Black Death (Plague)",
        ],
        correctAnswers: [
            "Black Death (Plague)",
        ],
        explanation: "The Black Death killed about one third of Britain's population in 1348.",
        optionExplanations: {
            "Smallpox": "Smallpox is incorrect. The correct answer is Black Death (Plague). The Black Death killed about one third of Britain's population in 1348.",
            "Cholera": "Cholera is incorrect. The correct answer is Black Death (Plague). The Black Death killed about one third of Britain's population in 1348.",
            "Typhoid": "Typhoid is incorrect. The correct answer is Black Death (Plague). The Black Death killed about one third of Britain's population in 1348.",
            "Black Death (Plague)": "Black Death (Plague) is correct. The Black Death killed about one third of Britain's population in 1348.",
        }
    },
    {
        question: "The Wars of the Roses was a civil war fought between which two families?",
        answers: [
            "House of Lancaster and House of York",
            "House of Tudor and House of Stuart",
            "House of Windsor and House of Hanover",
            "House of Plantagenet and House of Normandy",
        ],
        correctAnswers: [
            "House of Lancaster",
            "House of York",
        ],
        explanation: "The Wars of the Roses were fought between the House of Lancaster and the House of York.",
        optionExplanations: {
            "House of Lancaster and House of York": "House of Lancaster and House of York is incorrect. The correct answer is House of Lancaster, House of York. The Wars of the Roses were fought between the House of Lancaster and the House of York.",
            "House of Tudor and House of Stuart": "House of Tudor and House of Stuart is incorrect. The correct answer is House of Lancaster, House of York. The Wars of the Roses were fought between the House of Lancaster and the House of York.",
            "House of Windsor and House of Hanover": "House of Windsor and House of Hanover is incorrect. The correct answer is House of Lancaster, House of York. The Wars of the Roses were fought between the House of Lancaster and the House of York.",
            "House of Plantagenet and House of Normandy": "House of Plantagenet and House of Normandy is incorrect. The correct answer is House of Lancaster, House of York. The Wars of the Roses were fought between the House of Lancaster and the House of York.",
        }
    },
    {
        question: "Which king was defeated at the Battle of Bosworth Field in 1485?",
        answers: [
            "Henry VI",
            "Edward IV",
            "Richard III",
            "Henry V",
        ],
        correctAnswers: [
            "Richard III",
        ],
        explanation: "Richard III was defeated at the Battle of Bosworth Field in 1485.",
        optionExplanations: {
            "Henry VI": "Henry VI is incorrect. The correct answer is Richard III. Richard III was defeated at the Battle of Bosworth Field in 1485.",
            "Edward IV": "Edward IV is incorrect. The correct answer is Richard III. Richard III was defeated at the Battle of Bosworth Field in 1485.",
            "Richard III": "Richard III is correct. Richard III was defeated at the Battle of Bosworth Field in 1485.",
            "Henry V": "Henry V is incorrect. The correct answer is Richard III. Richard III was defeated at the Battle of Bosworth Field in 1485.",
        }
    },
    {
        question: "Who became the first Tudor king after defeating Richard III at the Battle of Bosworth?",
        answers: [
            "Henry VI",
            "Edward IV",
            "Henry VII",
            "Henry VIII",
        ],
        correctAnswers: [
            "Henry VII",
        ],
        explanation: "Henry VII became the first Tudor king after defeating Richard III.",
        optionExplanations: {
            "Henry VI": "Henry VI is incorrect. The correct answer is Henry VII. Henry VII became the first Tudor king after defeating Richard III.",
            "Edward IV": "Edward IV is incorrect. The correct answer is Henry VII. Henry VII became the first Tudor king after defeating Richard III.",
            "Henry VII": "Henry VII is correct. Henry VII became the first Tudor king after defeating Richard III.",
            "Henry VIII": "Henry VIII is incorrect. The correct answer is Henry VII. Henry VII became the first Tudor king after defeating Richard III.",
        }
    },
    {
        question: "What is the name given to the period of Charles II's return to power in 1660?",
        answers: [
            "The Reformation",
            "The Restoration of the Commonwealth",
            "The Restoration",
            "The Glorious Revolution",
        ],
        correctAnswers: [
            "The Restoration",
        ],
        explanation: "The period of Charles II's return is called the Restoration.",
        optionExplanations: {
            "The Reformation": "The Reformation is incorrect. The correct answer is The Restoration. The period of Charles II's return is called the Restoration.",
            "The Restoration of the Commonwealth": "The Restoration of the Commonwealth is incorrect. The correct answer is The Restoration. The period of Charles II's return is called the Restoration.",
            "The Restoration": "The Restoration is correct. The period of Charles II's return is called the Restoration.",
            "The Glorious Revolution": "The Glorious Revolution is incorrect. The correct answer is The Restoration. The period of Charles II's return is called the Restoration.",
        }
    },
    {
        question: "What was the Glorious Revolution of 1688?",
        answers: [
            "The signing of the Magna Carta",
            "The execution of King Charles I",
            "The invitation of William of Orange to rule England",
            "The Act of Union with Scotland",
        ],
        correctAnswers: [
            "The invitation of William of Orange to rule England",
        ],
        explanation: "The Glorious Revolution involved inviting William of Orange to rule England in 1688.",
        optionExplanations: {
            "The signing of the Magna Carta": "The signing of the Magna Carta is incorrect. The correct answer is The invitation of William of Orange to rule England. The Glorious Revolution involved inviting William of Orange to rule England in 1688.",
            "The execution of King Charles I": "The execution of King Charles I is incorrect. The correct answer is The invitation of William of Orange to rule England. The Glorious Revolution involved inviting William of Orange to rule England in 1688.",
            "The invitation of William of Orange to rule England": "The invitation of William of Orange to rule England is correct. The Glorious Revolution involved inviting William of Orange to rule England in 1688.",
            "The Act of Union with Scotland": "The Act of Union with Scotland is incorrect. The correct answer is The invitation of William of Orange to rule England. The Glorious Revolution involved inviting William of Orange to rule England in 1688.",
        }
    },
    {
        question: "In what year was the Act of Union between England and Scotland signed?",
        answers: [
            "1688",
            "1707",
            "1714",
            "1800",
        ],
        correctAnswers: [
            "1707",
        ],
        explanation: "The Act of Union between England and Scotland was signed in 1707.",
        optionExplanations: {
            "1688": "1688 is incorrect. The correct answer is 1707. The Act of Union between England and Scotland was signed in 1707.",
            "1707": "1707 is correct. The Act of Union between England and Scotland was signed in 1707.",
            "1714": "1714 is incorrect. The correct answer is 1707. The Act of Union between England and Scotland was signed in 1707.",
            "1800": "1800 is incorrect. The correct answer is 1707. The Act of Union between England and Scotland was signed in 1707.",
        }
    },
    {
        question: "In what year was the Act of Union with Ireland signed?",
        answers: [
            "1714",
            "1776",
            "1707",
            "1800",
        ],
        correctAnswers: [
            "1800",
        ],
        explanation: "The Act of Union with Ireland was signed in 1800.",
        optionExplanations: {
            "1714": "1714 is incorrect. The correct answer is 1800. The Act of Union with Ireland was signed in 1800.",
            "1776": "1776 is incorrect. The correct answer is 1800. The Act of Union with Ireland was signed in 1800.",
            "1707": "1707 is incorrect. The correct answer is 1800. The Act of Union with Ireland was signed in 1800.",
            "1800": "1800 is correct. The Act of Union with Ireland was signed in 1800.",
        }
    },
    {
        question: "Who commanded the British fleet at the Battle of Trafalgar in 1805?",
        answers: [
            "Duke of Wellington",
            "Admiral Lord Nelson",
            "Admiral Drake",
            "General Wolfe",
        ],
        correctAnswers: [
            "Admiral Lord Nelson",
        ],
        explanation: "Admiral Lord Nelson commanded the British fleet at Trafalgar.",
        optionExplanations: {
            "Duke of Wellington": "Duke of Wellington is incorrect. The correct answer is Admiral Lord Nelson. Admiral Lord Nelson commanded the British fleet at Trafalgar.",
            "Admiral Lord Nelson": "Admiral Lord Nelson is correct. Admiral Lord Nelson commanded the British fleet at Trafalgar.",
            "Admiral Drake": "Admiral Drake is incorrect. The correct answer is Admiral Lord Nelson. Admiral Lord Nelson commanded the British fleet at Trafalgar.",
            "General Wolfe": "General Wolfe is incorrect. The correct answer is Admiral Lord Nelson. Admiral Lord Nelson commanded the British fleet at Trafalgar.",
        }
    },
    {
        question: "At which battle in 1815 was Napoleon finally defeated?",
        answers: [
            "Battle of Trafalgar",
            "Battle of Blenheim",
            "Battle of Waterloo",
            "Battle of Agincourt",
        ],
        correctAnswers: [
            "Battle of Waterloo",
        ],
        explanation: "Napoleon was finally defeated at the Battle of Waterloo in 1815.",
        optionExplanations: {
            "Battle of Trafalgar": "Battle of Trafalgar is incorrect. The correct answer is Battle of Waterloo. Napoleon was finally defeated at the Battle of Waterloo in 1815.",
            "Battle of Blenheim": "Battle of Blenheim is incorrect. The correct answer is Battle of Waterloo. Napoleon was finally defeated at the Battle of Waterloo in 1815.",
            "Battle of Waterloo": "Battle of Waterloo is correct. Napoleon was finally defeated at the Battle of Waterloo in 1815.",
            "Battle of Agincourt": "Battle of Agincourt is incorrect. The correct answer is Battle of Waterloo. Napoleon was finally defeated at the Battle of Waterloo in 1815.",
        }
    },
    {
        question: "Which British general commanded the forces at Waterloo?",
        answers: [
            "Admiral Lord Nelson",
            "Duke of Wellington",
            "General Wolfe",
            "Sir Francis Drake",
        ],
        correctAnswers: [
            "Duke of Wellington",
        ],
        explanation: "Duke of Wellington commanded the forces at Waterloo.",
        optionExplanations: {
            "Admiral Lord Nelson": "Admiral Lord Nelson is incorrect. The correct answer is Duke of Wellington. Duke of Wellington commanded the forces at Waterloo.",
            "Duke of Wellington": "Duke of Wellington is correct. Duke of Wellington commanded the forces at Waterloo.",
            "General Wolfe": "General Wolfe is incorrect. The correct answer is Duke of Wellington. Duke of Wellington commanded the forces at Waterloo.",
            "Sir Francis Drake": "Sir Francis Drake is incorrect. The correct answer is Duke of Wellington. Duke of Wellington commanded the forces at Waterloo.",
        }
    },
    {
        question: "What was the name of the Irish famine that took place in the 1840s?",
        answers: [
            "The Great Famine (Irish Famine)",
            "The Potato Wars",
            "The Great Hunger Reform",
            "The Dublin Famine",
        ],
        correctAnswers: [
            "The Great Famine (Irish Famine)",
        ],
        explanation: "The Irish famine of the 1840s is known as the Great Famine.",
        optionExplanations: {
            "The Great Famine (Irish Famine)": "The Great Famine (Irish Famine) is correct. The Irish famine of the 1840s is known as the Great Famine.",
            "The Potato Wars": "The Potato Wars is incorrect. The correct answer is The Great Famine (Irish Famine). The Irish famine of the 1840s is known as the Great Famine.",
            "The Great Hunger Reform": "The Great Hunger Reform is incorrect. The correct answer is The Great Famine (Irish Famine). The Irish famine of the 1840s is known as the Great Famine.",
            "The Dublin Famine": "The Dublin Famine is incorrect. The correct answer is The Great Famine (Irish Famine). The Irish famine of the 1840s is known as the Great Famine.",
        }
    },
    {
        question: "When did the Second World War begin?",
        answers: [
            "1939",
            "1938",
            "1940",
            "1941",
        ],
        correctAnswers: [
            "1939",
        ],
        explanation: "The Second World War began in 1939.",
        optionExplanations: {
            "1939": "1939 is correct. The Second World War began in 1939.",
            "1938": "1938 is incorrect. The correct answer is 1939. The Second World War began in 1939.",
            "1940": "1940 is incorrect. The correct answer is 1939. The Second World War began in 1939.",
            "1941": "1941 is incorrect. The correct answer is 1939. The Second World War began in 1939.",
        }
    },
    {
        question: "When did the Second World War end?",
        answers: [
            "1944",
            "1945",
            "1946",
            "1947",
        ],
        correctAnswers: [
            "1945",
        ],
        explanation: "The Second World War ended in 1945.",
        optionExplanations: {
            "1944": "1944 is incorrect. The correct answer is 1945. The Second World War ended in 1945.",
            "1945": "1945 is correct. The Second World War ended in 1945.",
            "1946": "1946 is incorrect. The correct answer is 1945. The Second World War ended in 1945.",
            "1947": "1947 is incorrect. The correct answer is 1945. The Second World War ended in 1945.",
        }
    },
    {
        question: "Who was Britain's Prime Minister for most of the Second World War?",
        answers: [
            "Clement Attlee",
            "Neville Chamberlain",
            "Anthony Eden",
            "Winston Churchill",
        ],
        correctAnswers: [
            "Winston Churchill",
        ],
        explanation: "Winston Churchill was Prime Minister for most of WWII.",
        optionExplanations: {
            "Clement Attlee": "Clement Attlee is incorrect. The correct answer is Winston Churchill. Winston Churchill was Prime Minister for most of WWII.",
            "Neville Chamberlain": "Neville Chamberlain is incorrect. The correct answer is Winston Churchill. Winston Churchill was Prime Minister for most of WWII.",
            "Anthony Eden": "Anthony Eden is incorrect. The correct answer is Winston Churchill. Winston Churchill was Prime Minister for most of WWII.",
            "Winston Churchill": "Winston Churchill is correct. Winston Churchill was Prime Minister for most of WWII.",
        }
    },
    {
        question: "Which welfare system was established in the UK after World War II?",
        answers: [
            "The Poor Law",
            "Universal Credit",
            "The Welfare State",
            "The National Insurance Scheme",
        ],
        correctAnswers: [
            "The Welfare State",
        ],
        explanation: "The Welfare State was established after WWII.",
        optionExplanations: {
            "The Poor Law": "The Poor Law is incorrect. The correct answer is The Welfare State. The Welfare State was established after WWII.",
            "Universal Credit": "Universal Credit is incorrect. The correct answer is The Welfare State. The Welfare State was established after WWII.",
            "The Welfare State": "The Welfare State is correct. The Welfare State was established after WWII.",
            "The National Insurance Scheme": "The National Insurance Scheme is incorrect. The correct answer is The Welfare State. The Welfare State was established after WWII.",
        }
    },
    {
        question: "When was the National Health Service (NHS) established?",
        answers: [
            "1942",
            "1945",
            "1948",
            "1950",
        ],
        correctAnswers: [
            "1948",
        ],
        explanation: "The NHS was established in 1948.",
        optionExplanations: {
            "1942": "1942 is incorrect. The correct answer is 1948. The NHS was established in 1948.",
            "1945": "1945 is incorrect. The correct answer is 1948. The NHS was established in 1948.",
            "1948": "1948 is correct. The NHS was established in 1948.",
            "1950": "1950 is incorrect. The correct answer is 1948. The NHS was established in 1948.",
        }
    },
    {
        question: "Who is credited with founding the NHS?",
        answers: [
            "Clement Attlee",
            "Aneurin Bevan",
            "William Beveridge",
            "Ernest Bevin",
        ],
        correctAnswers: [
            "Aneurin Bevan",
        ],
        explanation: "Aneurin Bevan is credited with founding the NHS.",
        optionExplanations: {
            "Clement Attlee": "Clement Attlee is incorrect. The correct answer is Aneurin Bevan. Aneurin Bevan is credited with founding the NHS.",
            "Aneurin Bevan": "Aneurin Bevan is correct. Aneurin Bevan is credited with founding the NHS.",
            "William Beveridge": "William Beveridge is incorrect. The correct answer is Aneurin Bevan. Aneurin Bevan is credited with founding the NHS.",
            "Ernest Bevin": "Ernest Bevin is incorrect. The correct answer is Aneurin Bevan. Aneurin Bevan is credited with founding the NHS.",
        }
    },
    {
        question: "Which report laid the foundations for the welfare state?",
        answers: [
            "The Keynes Report",
            "The Beveridge Report",
            "The Churchill Report",
            "The Attlee Report",
        ],
        correctAnswers: [
            "The Beveridge Report",
        ],
        explanation: "The Beveridge Report laid the foundations for the welfare state.",
        optionExplanations: {
            "The Keynes Report": "The Keynes Report is incorrect. The correct answer is The Beveridge Report. The Beveridge Report laid the foundations for the welfare state.",
            "The Beveridge Report": "The Beveridge Report is correct. The Beveridge Report laid the foundations for the welfare state.",
            "The Churchill Report": "The Churchill Report is incorrect. The correct answer is The Beveridge Report. The Beveridge Report laid the foundations for the welfare state.",
            "The Attlee Report": "The Attlee Report is incorrect. The correct answer is The Beveridge Report. The Beveridge Report laid the foundations for the welfare state.",
        }
    },
    {
        question: "In which year did India and Pakistan gain independence from Britain?",
        answers: [
            "1945",
            "1948",
            "1950",
            "1947",
        ],
        correctAnswers: [
            "1947",
        ],
        explanation: "India and Pakistan gained independence in 1947.",
        optionExplanations: {
            "1945": "1945 is incorrect. The correct answer is 1947. India and Pakistan gained independence in 1947.",
            "1948": "1948 is incorrect. The correct answer is 1947. India and Pakistan gained independence in 1947.",
            "1950": "1950 is incorrect. The correct answer is 1947. India and Pakistan gained independence in 1947.",
            "1947": "1947 is correct. India and Pakistan gained independence in 1947.",
        }
    },
    {
        question: "What was the name of the 1950s programme where the UK invited people from Caribbean countries to come and work?",
        answers: [
            "The Windrush Programme",
            "The Empire Windrush initiative",
            "The Caribbean Migration Policy",
            "The Commonwealth Act",
        ],
        correctAnswers: [
            "The Empire Windrush initiative",
        ],
        explanation: "The programme was called the Empire Windrush initiative.",
        optionExplanations: {
            "The Windrush Programme": "The Windrush Programme is incorrect. The correct answer is The Empire Windrush initiative. The programme was called the Empire Windrush initiative.",
            "The Empire Windrush initiative": "The Empire Windrush initiative is correct. The programme was called the Empire Windrush initiative.",
            "The Caribbean Migration Policy": "The Caribbean Migration Policy is incorrect. The correct answer is The Empire Windrush initiative. The programme was called the Empire Windrush initiative.",
            "The Commonwealth Act": "The Commonwealth Act is incorrect. The correct answer is The Empire Windrush initiative. The programme was called the Empire Windrush initiative.",
        }
    },
    {
        question: "The first Windrush passengers arrived from the Caribbean in which year?",
        answers: [
            "1945",
            "1950",
            "1948",
            "1952",
        ],
        correctAnswers: [
            "1948",
        ],
        explanation: "The first Windrush passengers arrived in 1948.",
        optionExplanations: {
            "1945": "1945 is incorrect. The correct answer is 1948. The first Windrush passengers arrived in 1948.",
            "1950": "1950 is incorrect. The correct answer is 1948. The first Windrush passengers arrived in 1948.",
            "1948": "1948 is correct. The first Windrush passengers arrived in 1948.",
            "1952": "1952 is incorrect. The correct answer is 1948. The first Windrush passengers arrived in 1948.",
        }
    },
    {
        question: "What is the name of the UK's National Health Service?",
        answers: [
            "The National Medical Service",
            "The NHS",
            "The UK Health System",
            "The British Medical Service",
        ],
        correctAnswers: [
            "The NHS",
        ],
        explanation: "The UK's National Health Service is called the NHS.",
        optionExplanations: {
            "The National Medical Service": "The National Medical Service is incorrect. The correct answer is The NHS. The UK's National Health Service is called the NHS.",
            "The NHS": "The NHS is correct. The UK's National Health Service is called the NHS.",
            "The UK Health System": "The UK Health System is incorrect. The correct answer is The NHS. The UK's National Health Service is called the NHS.",
            "The British Medical Service": "The British Medical Service is incorrect. The correct answer is The NHS. The UK's National Health Service is called the NHS.",
        }
    },
    {
        question: "What is the legal age to buy alcohol in the UK?",
        answers: [
            "16",
            "18",
            "19",
            "21",
        ],
        correctAnswers: [
            "18",
        ],
        explanation: "The legal age to buy alcohol in the UK is 18.",
        optionExplanations: {
            "16": "16 is incorrect. The correct answer is 18. The legal age to buy alcohol in the UK is 18.",
            "18": "18 is correct. The legal age to buy alcohol in the UK is 18.",
            "19": "19 is incorrect. The correct answer is 18. The legal age to buy alcohol in the UK is 18.",
            "21": "21 is incorrect. The correct answer is 18. The legal age to buy alcohol in the UK is 18.",
        }
    },
    {
        question: "What is the name of the process by which citizens can contact their elected representative?",
        answers: [
            "Lobbying",
            "Petitioning",
            "Contacting their MP",
            "Referencing",
        ],
        correctAnswers: [
            "Contacting their MP",
        ],
        explanation: "Citizens can contact their elected representative by contacting their MP.",
        optionExplanations: {
            "Lobbying": "Lobbying is incorrect. The correct answer is Contacting their MP. Citizens can contact their elected representative by contacting their MP.",
            "Petitioning": "Petitioning is incorrect. The correct answer is Contacting their MP. Citizens can contact their elected representative by contacting their MP.",
            "Contacting their MP": "Contacting their MP is correct. Citizens can contact their elected representative by contacting their MP.",
            "Referencing": "Referencing is incorrect. The correct answer is Contacting their MP. Citizens can contact their elected representative by contacting their MP.",
        }
    },
    {
        question: "What is the name of the bill that became law in 1998 and incorporated the European Convention on Human Rights into UK law?",
        answers: [
            "The Equality Act",
            "The Civil Rights Act",
            "The Human Rights Act",
            "The Freedom Act",
        ],
        correctAnswers: [
            "The Human Rights Act",
        ],
        explanation: "The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law.",
        optionExplanations: {
            "The Equality Act": "The Equality Act is incorrect. The correct answer is The Human Rights Act. The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law.",
            "The Civil Rights Act": "The Civil Rights Act is incorrect. The correct answer is The Human Rights Act. The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law.",
            "The Human Rights Act": "The Human Rights Act is correct. The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law.",
            "The Freedom Act": "The Freedom Act is incorrect. The correct answer is The Human Rights Act. The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law.",
        }
    },
    {
        question: "What language is spoken in Wales alongside English?",
        answers: [
            "Gaelic",
            "Cornish",
            "Welsh",
            "Breton",
        ],
        correctAnswers: [
            "Welsh",
        ],
        explanation: "Welsh is spoken in Wales alongside English.",
        optionExplanations: {
            "Gaelic": "Gaelic is incorrect. The correct answer is Welsh. Welsh is spoken in Wales alongside English.",
            "Cornish": "Cornish is incorrect. The correct answer is Welsh. Welsh is spoken in Wales alongside English.",
            "Welsh": "Welsh is correct. Welsh is spoken in Wales alongside English.",
            "Breton": "Breton is incorrect. The correct answer is Welsh. Welsh is spoken in Wales alongside English.",
        }
    },
    {
        question: "What language is spoken in parts of Scotland?",
        answers: [
            "Welsh",
            "Cornish",
            "Scottish Gaelic",
            "Irish",
        ],
        correctAnswers: [
            "Scottish Gaelic",
        ],
        explanation: "Scottish Gaelic is spoken in parts of Scotland.",
        optionExplanations: {
            "Welsh": "Welsh is incorrect. The correct answer is Scottish Gaelic. Scottish Gaelic is spoken in parts of Scotland.",
            "Cornish": "Cornish is incorrect. The correct answer is Scottish Gaelic. Scottish Gaelic is spoken in parts of Scotland.",
            "Scottish Gaelic": "Scottish Gaelic is correct. Scottish Gaelic is spoken in parts of Scotland.",
            "Irish": "Irish is incorrect. The correct answer is Scottish Gaelic. Scottish Gaelic is spoken in parts of Scotland.",
        }
    },
    {
        question: "What is Hogmanay?",
        answers: [
            "A Welsh festival",
            "An English harvest celebration",
            "A Scottish New Year celebration",
            "A Northern Irish tradition",
        ],
        correctAnswers: [
            "A Scottish New Year celebration",
        ],
        explanation: "Hogmanay is a Scottish New Year celebration.",
        optionExplanations: {
            "A Welsh festival": "A Welsh festival is incorrect. The correct answer is A Scottish New Year celebration. Hogmanay is a Scottish New Year celebration.",
            "An English harvest celebration": "An English harvest celebration is incorrect. The correct answer is A Scottish New Year celebration. Hogmanay is a Scottish New Year celebration.",
            "A Scottish New Year celebration": "A Scottish New Year celebration is correct. Hogmanay is a Scottish New Year celebration.",
            "A Northern Irish tradition": "A Northern Irish tradition is incorrect. The correct answer is A Scottish New Year celebration. Hogmanay is a Scottish New Year celebration.",
        }
    },
    {
        question: "What is Burns Night celebrated on?",
        answers: [
            "25 December",
            "30 November",
            "25 January",
            "1 March",
        ],
        correctAnswers: [
            "25 January",
        ],
        explanation: "Burns Night is celebrated on 25 January.",
        optionExplanations: {
            "25 December": "25 December is incorrect. The correct answer is 25 January. Burns Night is celebrated on 25 January.",
            "30 November": "30 November is incorrect. The correct answer is 25 January. Burns Night is celebrated on 25 January.",
            "25 January": "25 January is correct. Burns Night is celebrated on 25 January.",
            "1 March": "1 March is incorrect. The correct answer is 25 January. Burns Night is celebrated on 25 January.",
        }
    },
    {
        question: "Who was Robert Burns?",
        answers: [
            "A Welsh poet",
            "An English playwright",
            "An Irish novelist",
            "A famous Scottish poet",
        ],
        correctAnswers: [
            "A famous Scottish poet",
        ],
        explanation: "Robert Burns was a famous Scottish poet.",
        optionExplanations: {
            "A Welsh poet": "A Welsh poet is incorrect. The correct answer is A famous Scottish poet. Robert Burns was a famous Scottish poet.",
            "An English playwright": "An English playwright is incorrect. The correct answer is A famous Scottish poet. Robert Burns was a famous Scottish poet.",
            "An Irish novelist": "An Irish novelist is incorrect. The correct answer is A famous Scottish poet. Robert Burns was a famous Scottish poet.",
            "A famous Scottish poet": "A famous Scottish poet is correct. Robert Burns was a famous Scottish poet.",
        }
    },
    {
        question: "What is Bonfire Night celebrated on?",
        answers: [
            "31 October",
            "1 November",
            "5 November",
            "11 November",
        ],
        correctAnswers: [
            "5 November",
        ],
        explanation: "Bonfire Night is celebrated on 5 November.",
        optionExplanations: {
            "31 October": "31 October is incorrect. The correct answer is 5 November. Bonfire Night is celebrated on 5 November.",
            "1 November": "1 November is incorrect. The correct answer is 5 November. Bonfire Night is celebrated on 5 November.",
            "5 November": "5 November is correct. Bonfire Night is celebrated on 5 November.",
            "11 November": "11 November is incorrect. The correct answer is 5 November. Bonfire Night is celebrated on 5 November.",
        }
    },
    {
        question: "What does Bonfire Night (Guy Fawkes Night) commemorate?",
        answers: [
            "The end of World War II",
            "The coronation of King James I",
            "The failed Gunpowder Plot of 1605",
            "The Battle of Trafalgar",
        ],
        correctAnswers: [
            "The failed Gunpowder Plot of 1605",
        ],
        explanation: "Bonfire Night commemorates the failed Gunpowder Plot of 1605.",
        optionExplanations: {
            "The end of World War II": "The end of World War II is incorrect. The correct answer is The failed Gunpowder Plot of 1605. Bonfire Night commemorates the failed Gunpowder Plot of 1605.",
            "The coronation of King James I": "The coronation of King James I is incorrect. The correct answer is The failed Gunpowder Plot of 1605. Bonfire Night commemorates the failed Gunpowder Plot of 1605.",
            "The failed Gunpowder Plot of 1605": "The failed Gunpowder Plot of 1605 is correct. Bonfire Night commemorates the failed Gunpowder Plot of 1605.",
            "The Battle of Trafalgar": "The Battle of Trafalgar is incorrect. The correct answer is The failed Gunpowder Plot of 1605. Bonfire Night commemorates the failed Gunpowder Plot of 1605.",
        }
    },
    {
        question: "Who was Guy Fawkes?",
        answers: [
            "A Scottish rebel leader",
            "A Welsh bard",
            "One of the conspirators in the Gunpowder Plot",
            "An English admiral",
        ],
        correctAnswers: [
            "One of the conspirators in the Gunpowder Plot",
        ],
        explanation: "Guy Fawkes was one of the conspirators in the Gunpowder Plot.",
        optionExplanations: {
            "A Scottish rebel leader": "A Scottish rebel leader is incorrect. The correct answer is One of the conspirators in the Gunpowder Plot. Guy Fawkes was one of the conspirators in the Gunpowder Plot.",
            "A Welsh bard": "A Welsh bard is incorrect. The correct answer is One of the conspirators in the Gunpowder Plot. Guy Fawkes was one of the conspirators in the Gunpowder Plot.",
            "One of the conspirators in the Gunpowder Plot": "One of the conspirators in the Gunpowder Plot is correct. Guy Fawkes was one of the conspirators in the Gunpowder Plot.",
            "An English admiral": "An English admiral is incorrect. The correct answer is One of the conspirators in the Gunpowder Plot. Guy Fawkes was one of the conspirators in the Gunpowder Plot.",
        }
    },
    {
        question: "What is celebrated on 25 December?",
        answers: [
            "New Year's Day",
            "Easter Sunday",
            "Christmas Day",
            "Remembrance Day",
        ],
        correctAnswers: [
            "Christmas Day",
        ],
        explanation: "25 December is Christmas Day.",
        optionExplanations: {
            "New Year's Day": "New Year's Day is incorrect. The correct answer is Christmas Day. 25 December is Christmas Day.",
            "Easter Sunday": "Easter Sunday is incorrect. The correct answer is Christmas Day. 25 December is Christmas Day.",
            "Christmas Day": "Christmas Day is correct. 25 December is Christmas Day.",
            "Remembrance Day": "Remembrance Day is incorrect. The correct answer is Christmas Day. 25 December is Christmas Day.",
        }
    },
    {
        question: "What is Good Friday?",
        answers: [
            "The Friday before Christmas",
            "A public holiday in spring with no religious connection",
            "The Friday before Easter Sunday, marking the crucifixion of Jesus",
            "The last Friday of the year",
        ],
        correctAnswers: [
            "The Friday before Easter Sunday, marking the crucifixion of Jesus",
        ],
        explanation: "Good Friday is the Friday before Easter, marking the crucifixion of Jesus.",
        optionExplanations: {
            "The Friday before Christmas": "The Friday before Christmas is incorrect. The correct answer is The Friday before Easter Sunday, marking the crucifixion of Jesus. Good Friday is the Friday before Easter, marking the crucifixion of Jesus.",
            "A public holiday in spring with no religious connection": "A public holiday in spring with no religious connection is incorrect. The correct answer is The Friday before Easter Sunday, marking the crucifixion of Jesus. Good Friday is the Friday before Easter, marking the crucifixion of Jesus.",
            "The Friday before Easter Sunday, marking the crucifixion of Jesus": "The Friday before Easter Sunday, marking the crucifixion of Jesus is correct. Good Friday is the Friday before Easter, marking the crucifixion of Jesus.",
            "The last Friday of the year": "The last Friday of the year is incorrect. The correct answer is The Friday before Easter Sunday, marking the crucifixion of Jesus. Good Friday is the Friday before Easter, marking the crucifixion of Jesus.",
        }
    },
    {
        question: "Easter celebrates which event in the Christian calendar?",
        answers: [
            "The birth of Jesus",
            "The baptism of Jesus",
            "The resurrection of Jesus",
            "The entry of Jesus into Jerusalem",
        ],
        correctAnswers: [
            "The resurrection of Jesus",
        ],
        explanation: "Easter celebrates the resurrection of Jesus.",
        optionExplanations: {
            "The birth of Jesus": "The birth of Jesus is incorrect. The correct answer is The resurrection of Jesus. Easter celebrates the resurrection of Jesus.",
            "The baptism of Jesus": "The baptism of Jesus is incorrect. The correct answer is The resurrection of Jesus. Easter celebrates the resurrection of Jesus.",
            "The resurrection of Jesus": "The resurrection of Jesus is correct. Easter celebrates the resurrection of Jesus.",
            "The entry of Jesus into Jerusalem": "The entry of Jesus into Jerusalem is incorrect. The correct answer is The resurrection of Jesus. Easter celebrates the resurrection of Jesus.",
        }
    },
    {
        question: "What is Diwali?",
        answers: [
            "A Muslim festival",
            "A Jewish festival",
            "A Hindu, Sikh and Jain festival of light",
            "A Buddhist festival",
        ],
        correctAnswers: [
            "A Hindu, Sikh and Jain festival of light",
        ],
        explanation: "Diwali is a Hindu, Sikh and Jain festival of light.",
        optionExplanations: {
            "A Muslim festival": "A Muslim festival is incorrect. The correct answer is A Hindu, Sikh and Jain festival of light. Diwali is a Hindu, Sikh and Jain festival of light.",
            "A Jewish festival": "A Jewish festival is incorrect. The correct answer is A Hindu, Sikh and Jain festival of light. Diwali is a Hindu, Sikh and Jain festival of light.",
            "A Hindu, Sikh and Jain festival of light": "A Hindu, Sikh and Jain festival of light is correct. Diwali is a Hindu, Sikh and Jain festival of light.",
            "A Buddhist festival": "A Buddhist festival is incorrect. The correct answer is A Hindu, Sikh and Jain festival of light. Diwali is a Hindu, Sikh and Jain festival of light.",
        }
    },
    {
        question: "What is Eid ul Fitr?",
        answers: [
            "The beginning of Ramadan",
            "A Hindu festival",
            "A Muslim celebration marking the end of Ramadan",
            "A Sikh festival",
        ],
        correctAnswers: [
            "A Muslim celebration marking the end of Ramadan",
        ],
        explanation: "Eid ul Fitr is a Muslim celebration marking the end of Ramadan.",
        optionExplanations: {
            "The beginning of Ramadan": "The beginning of Ramadan is incorrect. The correct answer is A Muslim celebration marking the end of Ramadan. Eid ul Fitr is a Muslim celebration marking the end of Ramadan.",
            "A Hindu festival": "A Hindu festival is incorrect. The correct answer is A Muslim celebration marking the end of Ramadan. Eid ul Fitr is a Muslim celebration marking the end of Ramadan.",
            "A Muslim celebration marking the end of Ramadan": "A Muslim celebration marking the end of Ramadan is correct. Eid ul Fitr is a Muslim celebration marking the end of Ramadan.",
            "A Sikh festival": "A Sikh festival is incorrect. The correct answer is A Muslim celebration marking the end of Ramadan. Eid ul Fitr is a Muslim celebration marking the end of Ramadan.",
        }
    },
    {
        question: "What is Hanukkah?",
        answers: [
            "A Muslim festival",
            "A Hindu festival",
            "A Christian festival",
            "A Jewish festival of light",
        ],
        correctAnswers: [
            "A Jewish festival of light",
        ],
        explanation: "Hanukkah is a Jewish festival of light.",
        optionExplanations: {
            "A Muslim festival": "A Muslim festival is incorrect. The correct answer is A Jewish festival of light. Hanukkah is a Jewish festival of light.",
            "A Hindu festival": "A Hindu festival is incorrect. The correct answer is A Jewish festival of light. Hanukkah is a Jewish festival of light.",
            "A Christian festival": "A Christian festival is incorrect. The correct answer is A Jewish festival of light. Hanukkah is a Jewish festival of light.",
            "A Jewish festival of light": "A Jewish festival of light is correct. Hanukkah is a Jewish festival of light.",
        }
    },
    {
        question: "Which sport is associated with Wimbledon?",
        answers: [
            "Cricket",
            "Football",
            "Tennis",
            "Golf",
        ],
        correctAnswers: [
            "Tennis",
        ],
        explanation: "Wimbledon is associated with tennis.",
        optionExplanations: {
            "Cricket": "Cricket is incorrect. The correct answer is Tennis. Wimbledon is associated with tennis.",
            "Football": "Football is incorrect. The correct answer is Tennis. Wimbledon is associated with tennis.",
            "Tennis": "Tennis is correct. Wimbledon is associated with tennis.",
            "Golf": "Golf is incorrect. The correct answer is Tennis. Wimbledon is associated with tennis.",
        }
    },
    {
        question: "Where is the Wimbledon tennis tournament held?",
        answers: [
            "Manchester",
            "Birmingham",
            "London",
            "Bristol",
        ],
        correctAnswers: [
            "London",
        ],
        explanation: "The Wimbledon tennis tournament is held in London.",
        optionExplanations: {
            "Manchester": "Manchester is incorrect. The correct answer is London. The Wimbledon tennis tournament is held in London.",
            "Birmingham": "Birmingham is incorrect. The correct answer is London. The Wimbledon tennis tournament is held in London.",
            "London": "London is correct. The Wimbledon tennis tournament is held in London.",
            "Bristol": "Bristol is incorrect. The correct answer is London. The Wimbledon tennis tournament is held in London.",
        }
    },
    {
        question: "Which horse racing event is held at Epsom Downs?",
        answers: [
            "The Grand National",
            "The Cheltenham Gold Cup",
            "The Royal Ascot",
            "The Derby",
        ],
        correctAnswers: [
            "The Derby",
        ],
        explanation: "The Derby is held at Epsom Downs.",
        optionExplanations: {
            "The Grand National": "The Grand National is incorrect. The correct answer is The Derby. The Derby is held at Epsom Downs.",
            "The Cheltenham Gold Cup": "The Cheltenham Gold Cup is incorrect. The correct answer is The Derby. The Derby is held at Epsom Downs.",
            "The Royal Ascot": "The Royal Ascot is incorrect. The correct answer is The Derby. The Derby is held at Epsom Downs.",
            "The Derby": "The Derby is correct. The Derby is held at Epsom Downs.",
        }
    },
    {
        question: "Which horse racing event is held at Aintree?",
        answers: [
            "The Derby",
            "The Cheltenham Gold Cup",
            "Royal Ascot",
            "The Grand National",
        ],
        correctAnswers: [
            "The Grand National",
        ],
        explanation: "The Grand National is held at Aintree.",
        optionExplanations: {
            "The Derby": "The Derby is incorrect. The correct answer is The Grand National. The Grand National is held at Aintree.",
            "The Cheltenham Gold Cup": "The Cheltenham Gold Cup is incorrect. The correct answer is The Grand National. The Grand National is held at Aintree.",
            "Royal Ascot": "Royal Ascot is incorrect. The correct answer is The Grand National. The Grand National is held at Aintree.",
            "The Grand National": "The Grand National is correct. The Grand National is held at Aintree.",
        }
    },
    {
        question: "The FA Cup is awarded in which sport?",
        answers: [
            "Cricket",
            "Rugby",
            "Football",
            "Tennis",
        ],
        correctAnswers: [
            "Football",
        ],
        explanation: "The FA Cup is awarded in football.",
        optionExplanations: {
            "Cricket": "Cricket is incorrect. The correct answer is Football. The FA Cup is awarded in football.",
            "Rugby": "Rugby is incorrect. The correct answer is Football. The FA Cup is awarded in football.",
            "Football": "Football is correct. The FA Cup is awarded in football.",
            "Tennis": "Tennis is incorrect. The correct answer is Football. The FA Cup is awarded in football.",
        }
    },
    {
        question: "What is the Ashes?",
        answers: [
            "A football competition between England and Scotland",
            "A rugby tournament",
            "A cricket competition between England and Australia",
            "A golf tournament",
        ],
        correctAnswers: [
            "A cricket competition between England and Australia",
        ],
        explanation: "The Ashes is a cricket competition between England and Australia.",
        optionExplanations: {
            "A football competition between England and Scotland": "A football competition between England and Scotland is incorrect. The correct answer is A cricket competition between England and Australia. The Ashes is a cricket competition between England and Australia.",
            "A rugby tournament": "A rugby tournament is incorrect. The correct answer is A cricket competition between England and Australia. The Ashes is a cricket competition between England and Australia.",
            "A cricket competition between England and Australia": "A cricket competition between England and Australia is correct. The Ashes is a cricket competition between England and Australia.",
            "A golf tournament": "A golf tournament is incorrect. The correct answer is A cricket competition between England and Australia. The Ashes is a cricket competition between England and Australia.",
        }
    },
    {
        question: "Where is the home of English cricket?",
        answers: [
            "The Oval",
            "Lord's Cricket Ground",
            "Edgbaston",
            "Old Trafford",
        ],
        correctAnswers: [
            "Lord's Cricket Ground",
        ],
        explanation: "Lord's Cricket Ground is the home of English cricket.",
        optionExplanations: {
            "The Oval": "The Oval is incorrect. The correct answer is Lord's Cricket Ground. Lord's Cricket Ground is the home of English cricket.",
            "Lord's Cricket Ground": "Lord's Cricket Ground is correct. Lord's Cricket Ground is the home of English cricket.",
            "Edgbaston": "Edgbaston is incorrect. The correct answer is Lord's Cricket Ground. Lord's Cricket Ground is the home of English cricket.",
            "Old Trafford": "Old Trafford is incorrect. The correct answer is Lord's Cricket Ground. Lord's Cricket Ground is the home of English cricket.",
        }
    },
    {
        question: "What is the name of the annual boat race held on the River Thames?",
        answers: [
            "The Thames Regatta",
            "The Oxford and Cambridge Boat Race",
            "The National Boat Race",
            "The Royal Henley Race",
        ],
        correctAnswers: [
            "The Oxford and Cambridge Boat Race",
        ],
        explanation: "The annual boat race on the Thames is the Oxford and Cambridge Boat Race.",
        optionExplanations: {
            "The Thames Regatta": "The Thames Regatta is incorrect. The correct answer is The Oxford and Cambridge Boat Race. The annual boat race on the Thames is the Oxford and Cambridge Boat Race.",
            "The Oxford and Cambridge Boat Race": "The Oxford and Cambridge Boat Race is correct. The annual boat race on the Thames is the Oxford and Cambridge Boat Race.",
            "The National Boat Race": "The National Boat Race is incorrect. The correct answer is The Oxford and Cambridge Boat Race. The annual boat race on the Thames is the Oxford and Cambridge Boat Race.",
            "The Royal Henley Race": "The Royal Henley Race is incorrect. The correct answer is The Oxford and Cambridge Boat Race. The annual boat race on the Thames is the Oxford and Cambridge Boat Race.",
        }
    },
    {
        question: "In which city is the National Museum of Scotland located?",
        answers: [
            "Glasgow",
            "Aberdeen",
            "Dundee",
            "Edinburgh",
        ],
        correctAnswers: [
            "Edinburgh",
        ],
        explanation: "The National Museum of Scotland is located in Edinburgh.",
        optionExplanations: {
            "Glasgow": "Glasgow is incorrect. The correct answer is Edinburgh. The National Museum of Scotland is located in Edinburgh.",
            "Aberdeen": "Aberdeen is incorrect. The correct answer is Edinburgh. The National Museum of Scotland is located in Edinburgh.",
            "Dundee": "Dundee is incorrect. The correct answer is Edinburgh. The National Museum of Scotland is located in Edinburgh.",
            "Edinburgh": "Edinburgh is correct. The National Museum of Scotland is located in Edinburgh.",
        }
    },
    {
        question: "Who wrote the play \"A Midsummer Night's Dream\"?",
        answers: [
            "Christopher Marlowe",
            "Ben Jonson",
            "William Shakespeare",
            "John Milton",
        ],
        correctAnswers: [
            "William Shakespeare",
        ],
        explanation: "William Shakespeare wrote 'A Midsummer Night's Dream'.",
        optionExplanations: {
            "Christopher Marlowe": "Christopher Marlowe is incorrect. The correct answer is William Shakespeare. William Shakespeare wrote 'A Midsummer Night's Dream'.",
            "Ben Jonson": "Ben Jonson is incorrect. The correct answer is William Shakespeare. William Shakespeare wrote 'A Midsummer Night's Dream'.",
            "William Shakespeare": "William Shakespeare is correct. William Shakespeare wrote 'A Midsummer Night's Dream'.",
            "John Milton": "John Milton is incorrect. The correct answer is William Shakespeare. William Shakespeare wrote 'A Midsummer Night's Dream'.",
        }
    },
    {
        question: "Who wrote \"Pride and Prejudice\"?",
        answers: [
            "Charlotte Brontë",
            "George Eliot",
            "Jane Austen",
            "Thomas Hardy",
        ],
        correctAnswers: [
            "Jane Austen",
        ],
        explanation: "Jane Austen wrote 'Pride and Prejudice'.",
        optionExplanations: {
            "Charlotte Brontë": "Charlotte Brontë is incorrect. The correct answer is Jane Austen. Jane Austen wrote 'Pride and Prejudice'.",
            "George Eliot": "George Eliot is incorrect. The correct answer is Jane Austen. Jane Austen wrote 'Pride and Prejudice'.",
            "Jane Austen": "Jane Austen is correct. Jane Austen wrote 'Pride and Prejudice'.",
            "Thomas Hardy": "Thomas Hardy is incorrect. The correct answer is Jane Austen. Jane Austen wrote 'Pride and Prejudice'.",
        }
    },
    {
        question: "Who wrote \"Oliver Twist\"?",
        answers: [
            "William Thackeray",
            "Charles Dickens",
            "Anthony Trollope",
            "Thomas Hardy",
        ],
        correctAnswers: [
            "Charles Dickens",
        ],
        explanation: "Charles Dickens wrote 'Oliver Twist'.",
        optionExplanations: {
            "William Thackeray": "William Thackeray is incorrect. The correct answer is Charles Dickens. Charles Dickens wrote 'Oliver Twist'.",
            "Charles Dickens": "Charles Dickens is correct. Charles Dickens wrote 'Oliver Twist'.",
            "Anthony Trollope": "Anthony Trollope is incorrect. The correct answer is Charles Dickens. Charles Dickens wrote 'Oliver Twist'.",
            "Thomas Hardy": "Thomas Hardy is incorrect. The correct answer is Charles Dickens. Charles Dickens wrote 'Oliver Twist'.",
        }
    },
    {
        question: "Who wrote \"Robinson Crusoe\"?",
        answers: [
            "Jonathan Swift",
            "Henry Fielding",
            "Samuel Richardson",
            "Daniel Defoe",
        ],
        correctAnswers: [
            "Daniel Defoe",
        ],
        explanation: "Daniel Defoe wrote 'Robinson Crusoe'.",
        optionExplanations: {
            "Jonathan Swift": "Jonathan Swift is incorrect. The correct answer is Daniel Defoe. Daniel Defoe wrote 'Robinson Crusoe'.",
            "Henry Fielding": "Henry Fielding is incorrect. The correct answer is Daniel Defoe. Daniel Defoe wrote 'Robinson Crusoe'.",
            "Samuel Richardson": "Samuel Richardson is incorrect. The correct answer is Daniel Defoe. Daniel Defoe wrote 'Robinson Crusoe'.",
            "Daniel Defoe": "Daniel Defoe is correct. Daniel Defoe wrote 'Robinson Crusoe'.",
        }
    },
    {
        question: "Which author wrote the Sherlock Holmes stories?",
        answers: [
            "Agatha Christie",
            "Wilkie Collins",
            "Sir Arthur Conan Doyle",
            "H.G. Wells",
        ],
        correctAnswers: [
            "Sir Arthur Conan Doyle",
        ],
        explanation: "Sir Arthur Conan Doyle wrote the Sherlock Holmes stories.",
        optionExplanations: {
            "Agatha Christie": "Agatha Christie is incorrect. The correct answer is Sir Arthur Conan Doyle. Sir Arthur Conan Doyle wrote the Sherlock Holmes stories.",
            "Wilkie Collins": "Wilkie Collins is incorrect. The correct answer is Sir Arthur Conan Doyle. Sir Arthur Conan Doyle wrote the Sherlock Holmes stories.",
            "Sir Arthur Conan Doyle": "Sir Arthur Conan Doyle is correct. Sir Arthur Conan Doyle wrote the Sherlock Holmes stories.",
            "H.G. Wells": "H.G. Wells is incorrect. The correct answer is Sir Arthur Conan Doyle. Sir Arthur Conan Doyle wrote the Sherlock Holmes stories.",
        }
    },
    {
        question: "Who painted \"The Hay Wain\"?",
        answers: [
            "J.M.W. Turner",
            "Thomas Gainsborough",
            "John Constable",
            "William Hogarth",
        ],
        correctAnswers: [
            "John Constable",
        ],
        explanation: "John Constable painted 'The Hay Wain'.",
        optionExplanations: {
            "J.M.W. Turner": "J.M.W. Turner is incorrect. The correct answer is John Constable. John Constable painted 'The Hay Wain'.",
            "Thomas Gainsborough": "Thomas Gainsborough is incorrect. The correct answer is John Constable. John Constable painted 'The Hay Wain'.",
            "John Constable": "John Constable is correct. John Constable painted 'The Hay Wain'.",
            "William Hogarth": "William Hogarth is incorrect. The correct answer is John Constable. John Constable painted 'The Hay Wain'.",
        }
    },
    {
        question: "Who designed St Paul's Cathedral in London?",
        answers: [
            "Inigo Jones",
            "John Vanbrugh",
            "Sir Christopher Wren",
            "Robert Adam",
        ],
        correctAnswers: [
            "Sir Christopher Wren",
        ],
        explanation: "Sir Christopher Wren designed St Paul's Cathedral.",
        optionExplanations: {
            "Inigo Jones": "Inigo Jones is incorrect. The correct answer is Sir Christopher Wren. Sir Christopher Wren designed St Paul's Cathedral.",
            "John Vanbrugh": "John Vanbrugh is incorrect. The correct answer is Sir Christopher Wren. Sir Christopher Wren designed St Paul's Cathedral.",
            "Sir Christopher Wren": "Sir Christopher Wren is correct. Sir Christopher Wren designed St Paul's Cathedral.",
            "Robert Adam": "Robert Adam is incorrect. The correct answer is Sir Christopher Wren. Sir Christopher Wren designed St Paul's Cathedral.",
        }
    },
    {
        question: "The Proms is an annual series of what type of events?",
        answers: [
            "Art exhibitions",
            "Film screenings",
            "Classical music concerts",
            "Theatre productions",
        ],
        correctAnswers: [
            "Classical music concerts",
        ],
        explanation: "The Proms is an annual series of classical music concerts.",
        optionExplanations: {
            "Art exhibitions": "Art exhibitions is incorrect. The correct answer is Classical music concerts. The Proms is an annual series of classical music concerts.",
            "Film screenings": "Film screenings is incorrect. The correct answer is Classical music concerts. The Proms is an annual series of classical music concerts.",
            "Classical music concerts": "Classical music concerts is correct. The Proms is an annual series of classical music concerts.",
            "Theatre productions": "Theatre productions is incorrect. The correct answer is Classical music concerts. The Proms is an annual series of classical music concerts.",
        }
    },
    {
        question: "Which famous music event takes place in Glastonbury?",
        answers: [
            "The Proms",
            "The Royal Albert Hall Festival",
            "Glastonbury Festival",
            "Edinburgh Fringe",
        ],
        correctAnswers: [
            "Glastonbury Festival",
        ],
        explanation: "The Glastonbury Festival takes place in Glastonbury.",
        optionExplanations: {
            "The Proms": "The Proms is incorrect. The correct answer is Glastonbury Festival. The Glastonbury Festival takes place in Glastonbury.",
            "The Royal Albert Hall Festival": "The Royal Albert Hall Festival is incorrect. The correct answer is Glastonbury Festival. The Glastonbury Festival takes place in Glastonbury.",
            "Glastonbury Festival": "Glastonbury Festival is correct. The Glastonbury Festival takes place in Glastonbury.",
            "Edinburgh Fringe": "Edinburgh Fringe is incorrect. The correct answer is Glastonbury Festival. The Glastonbury Festival takes place in Glastonbury.",
        }
    },
    {
        question: "The Edinburgh Festival is primarily known as a festival of:",
        answers: [
            "Film",
            "Music",
            "Arts and culture (including theatre, comedy and music)",
            "Sport",
        ],
        correctAnswers: [
            "Arts and culture (including theatre, comedy and music)",
        ],
        explanation: "The Edinburgh Festival is primarily a festival of arts and culture.",
        optionExplanations: {
            "Film": "Film is incorrect. The correct answer is Arts and culture (including theatre, comedy and music). The Edinburgh Festival is primarily a festival of arts and culture.",
            "Music": "Music is incorrect. The correct answer is Arts and culture (including theatre, comedy and music). The Edinburgh Festival is primarily a festival of arts and culture.",
            "Arts and culture (including theatre, comedy and music)": "Arts and culture (including theatre, comedy and music) is correct. The Edinburgh Festival is primarily a festival of arts and culture.",
            "Sport": "Sport is incorrect. The correct answer is Arts and culture (including theatre, comedy and music). The Edinburgh Festival is primarily a festival of arts and culture.",
        }
    },
    {
        question: "What is the Notting Hill Carnival?",
        answers: [
            "A Scottish Highland games event",
            "A Welsh music festival",
            "A Caribbean-influenced street festival in London",
            "An English morris dancing event",
        ],
        correctAnswers: [
            "A Caribbean-influenced street festival in London",
        ],
        explanation: "The Notting Hill Carnival is a Caribbean-influenced street festival in London.",
        optionExplanations: {
            "A Scottish Highland games event": "A Scottish Highland games event is incorrect. The correct answer is A Caribbean-influenced street festival in London. The Notting Hill Carnival is a Caribbean-influenced street festival in London.",
            "A Welsh music festival": "A Welsh music festival is incorrect. The correct answer is A Caribbean-influenced street festival in London. The Notting Hill Carnival is a Caribbean-influenced street festival in London.",
            "A Caribbean-influenced street festival in London": "A Caribbean-influenced street festival in London is correct. The Notting Hill Carnival is a Caribbean-influenced street festival in London.",
            "An English morris dancing event": "An English morris dancing event is incorrect. The correct answer is A Caribbean-influenced street festival in London. The Notting Hill Carnival is a Caribbean-influenced street festival in London.",
        }
    },
    {
        question: "Who is the Poet Laureate appointed by?",
        answers: [
            "The Prime Minister",
            "The Speaker of the House of Commons",
            "The Monarch",
            "The Arts Council",
        ],
        correctAnswers: [
            "The Monarch",
        ],
        explanation: "The Poet Laureate is appointed by the Monarch.",
        optionExplanations: {
            "The Prime Minister": "The Prime Minister is incorrect. The correct answer is The Monarch. The Poet Laureate is appointed by the Monarch.",
            "The Speaker of the House of Commons": "The Speaker of the House of Commons is incorrect. The correct answer is The Monarch. The Poet Laureate is appointed by the Monarch.",
            "The Monarch": "The Monarch is correct. The Poet Laureate is appointed by the Monarch.",
            "The Arts Council": "The Arts Council is incorrect. The correct answer is The Monarch. The Poet Laureate is appointed by the Monarch.",
        }
    },
    {
        question: "Which composer wrote the Water Music?",
        answers: [
            "Henry Purcell",
            "George Frideric Handel",
            "Benjamin Britten",
            "Ralph Vaughan Williams",
        ],
        correctAnswers: [
            "George Frideric Handel",
        ],
        explanation: "George Frideric Handel wrote the Water Music.",
        optionExplanations: {
            "Henry Purcell": "Henry Purcell is incorrect. The correct answer is George Frideric Handel. George Frideric Handel wrote the Water Music.",
            "George Frideric Handel": "George Frideric Handel is correct. George Frideric Handel wrote the Water Music.",
            "Benjamin Britten": "Benjamin Britten is incorrect. The correct answer is George Frideric Handel. George Frideric Handel wrote the Water Music.",
            "Ralph Vaughan Williams": "Ralph Vaughan Williams is incorrect. The correct answer is George Frideric Handel. George Frideric Handel wrote the Water Music.",
        }
    },
    {
        question: "Which British-based composer wrote \"The Planets\" suite?",
        answers: [
            "Edward Elgar",
            "Benjamin Britten",
            "Ralph Vaughan Williams",
            "Gustav Holst",
        ],
        correctAnswers: [
            "Gustav Holst",
        ],
        explanation: "Gustav Holst wrote 'The Planets' suite.",
        optionExplanations: {
            "Edward Elgar": "Edward Elgar is incorrect. The correct answer is Gustav Holst. Gustav Holst wrote 'The Planets' suite.",
            "Benjamin Britten": "Benjamin Britten is incorrect. The correct answer is Gustav Holst. Gustav Holst wrote 'The Planets' suite.",
            "Ralph Vaughan Williams": "Ralph Vaughan Williams is incorrect. The correct answer is Gustav Holst. Gustav Holst wrote 'The Planets' suite.",
            "Gustav Holst": "Gustav Holst is correct. Gustav Holst wrote 'The Planets' suite.",
        }
    },
    {
        question: "Who composed the Enigma Variations?",
        answers: [
            "Benjamin Britten",
            "Gustav Holst",
            "Henry Purcell",
            "Edward Elgar",
        ],
        correctAnswers: [
            "Edward Elgar",
        ],
        explanation: "Edward Elgar composed the Enigma Variations.",
        optionExplanations: {
            "Benjamin Britten": "Benjamin Britten is incorrect. The correct answer is Edward Elgar. Edward Elgar composed the Enigma Variations.",
            "Gustav Holst": "Gustav Holst is incorrect. The correct answer is Edward Elgar. Edward Elgar composed the Enigma Variations.",
            "Henry Purcell": "Henry Purcell is incorrect. The correct answer is Edward Elgar. Edward Elgar composed the Enigma Variations.",
            "Edward Elgar": "Edward Elgar is correct. Edward Elgar composed the Enigma Variations.",
        }
    },
    {
        question: "Which actor is famous for playing Charlie Chaplin-style silent film roles?",
        answers: [
            "Laurence Olivier",
            "Charlie Chapman",
            "Alfred Hitchcock",
            "Michael Caine",
        ],
        correctAnswers: [
            "Charlie Chapman",
        ],
        explanation: "Charlie Chapman is famous for playing Charlie Chaplin-style silent film roles.",
        optionExplanations: {
            "Laurence Olivier": "Laurence Olivier is incorrect. The correct answer is Charlie Chapman. Charlie Chapman is famous for playing Charlie Chaplin-style silent film roles.",
            "Charlie Chapman": "Charlie Chapman is correct. Charlie Chapman is famous for playing Charlie Chaplin-style silent film roles.",
            "Alfred Hitchcock": "Alfred Hitchcock is incorrect. The correct answer is Charlie Chapman. Charlie Chapman is famous for playing Charlie Chaplin-style silent film roles.",
            "Michael Caine": "Michael Caine is incorrect. The correct answer is Charlie Chapman. Charlie Chapman is famous for playing Charlie Chaplin-style silent film roles.",
        }
    },
    {
        question: "Alfred Hitchcock was famous as a:",
        answers: [
            "Novelist",
            "Composer",
            "Film director",
            "Playwright",
        ],
        correctAnswers: [
            "Film director",
        ],
        explanation: "Alfred Hitchcock was famous as a film director.",
        optionExplanations: {
            "Novelist": "Novelist is incorrect. The correct answer is Film director. Alfred Hitchcock was famous as a film director.",
            "Composer": "Composer is incorrect. The correct answer is Film director. Alfred Hitchcock was famous as a film director.",
            "Film director": "Film director is correct. Alfred Hitchcock was famous as a film director.",
            "Playwright": "Playwright is incorrect. The correct answer is Film director. Alfred Hitchcock was famous as a film director.",
        }
    },
    {
        question: "Which comedian was famous as one of the creators of the TV show \"Fawlty Towers\"?",
        answers: [
            "Rowan Atkinson",
            "John Cleese",
            "Benny Hill",
            "Bob Hope",
        ],
        correctAnswers: [
            "John Cleese",
        ],
        explanation: "John Cleese was one of the creators of 'Fawlty Towers'.",
        optionExplanations: {
            "Rowan Atkinson": "Rowan Atkinson is incorrect. The correct answer is John Cleese. John Cleese was one of the creators of 'Fawlty Towers'.",
            "John Cleese": "John Cleese is correct. John Cleese was one of the creators of 'Fawlty Towers'.",
            "Benny Hill": "Benny Hill is incorrect. The correct answer is John Cleese. John Cleese was one of the creators of 'Fawlty Towers'.",
            "Bob Hope": "Bob Hope is incorrect. The correct answer is John Cleese. John Cleese was one of the creators of 'Fawlty Towers'.",
        }
    },
    {
        question: "What does \"first past the post\" refer to in UK elections?",
        answers: [
            "A method of proportional representation",
            "A preference voting system",
            "The candidate with the most votes wins the seat",
            "A run-off voting system",
        ],
        correctAnswers: [
            "The candidate with the most votes wins the seat",
        ],
        explanation: "First past the post means the candidate with the most votes wins the seat.",
        optionExplanations: {
            "A method of proportional representation": "A method of proportional representation is incorrect. The correct answer is The candidate with the most votes wins the seat. First past the post means the candidate with the most votes wins the seat.",
            "A preference voting system": "A preference voting system is incorrect. The correct answer is The candidate with the most votes wins the seat. First past the post means the candidate with the most votes wins the seat.",
            "The candidate with the most votes wins the seat": "The candidate with the most votes wins the seat is correct. First past the post means the candidate with the most votes wins the seat.",
            "A run-off voting system": "A run-off voting system is incorrect. The correct answer is The candidate with the most votes wins the seat. First past the post means the candidate with the most votes wins the seat.",
        }
    },
    {
        question: "What is a by-election?",
        answers: [
            "An election held in Scotland only",
            "A local council election",
            "An election held to fill a vacant seat between general elections",
            "An election for the House of Lords",
        ],
        correctAnswers: [
            "An election held to fill a vacant seat between general elections",
        ],
        explanation: "A by-election is held to fill a vacant seat between general elections.",
        optionExplanations: {
            "An election held in Scotland only": "An election held in Scotland only is incorrect. The correct answer is An election held to fill a vacant seat between general elections. A by-election is held to fill a vacant seat between general elections.",
            "A local council election": "A local council election is incorrect. The correct answer is An election held to fill a vacant seat between general elections. A by-election is held to fill a vacant seat between general elections.",
            "An election held to fill a vacant seat between general elections": "An election held to fill a vacant seat between general elections is correct. A by-election is held to fill a vacant seat between general elections.",
            "An election for the House of Lords": "An election for the House of Lords is incorrect. The correct answer is An election held to fill a vacant seat between general elections. A by-election is held to fill a vacant seat between general elections.",
        }
    },
    {
        question: "What is the role of a magistrate?",
        answers: [
            "Passing Acts of Parliament",
            "Collecting taxes",
            "Hearing less serious criminal cases and some civil cases",
            "Managing the police force",
        ],
        correctAnswers: [
            "Hearing less serious criminal cases and some civil cases",
        ],
        explanation: "A magistrate hears less serious criminal cases and some civil cases.",
        optionExplanations: {
            "Passing Acts of Parliament": "Passing Acts of Parliament is incorrect. The correct answer is Hearing less serious criminal cases and some civil cases. A magistrate hears less serious criminal cases and some civil cases.",
            "Collecting taxes": "Collecting taxes is incorrect. The correct answer is Hearing less serious criminal cases and some civil cases. A magistrate hears less serious criminal cases and some civil cases.",
            "Hearing less serious criminal cases and some civil cases": "Hearing less serious criminal cases and some civil cases is correct. A magistrate hears less serious criminal cases and some civil cases.",
            "Managing the police force": "Managing the police force is incorrect. The correct answer is Hearing less serious criminal cases and some civil cases. A magistrate hears less serious criminal cases and some civil cases.",
        }
    },
    {
        question: "What is the role of a coroner?",
        answers: [
            "To advise the monarch on legal matters",
            "To oversee elections",
            "To investigate sudden or unexplained deaths",
            "To prosecute criminal cases",
        ],
        correctAnswers: [
            "To investigate sudden or unexplained deaths",
        ],
        explanation: "A coroner investigates sudden or unexplained deaths.",
        optionExplanations: {
            "To advise the monarch on legal matters": "To advise the monarch on legal matters is incorrect. The correct answer is To investigate sudden or unexplained deaths. A coroner investigates sudden or unexplained deaths.",
            "To oversee elections": "To oversee elections is incorrect. The correct answer is To investigate sudden or unexplained deaths. A coroner investigates sudden or unexplained deaths.",
            "To investigate sudden or unexplained deaths": "To investigate sudden or unexplained deaths is correct. A coroner investigates sudden or unexplained deaths.",
            "To prosecute criminal cases": "To prosecute criminal cases is incorrect. The correct answer is To investigate sudden or unexplained deaths. A coroner investigates sudden or unexplained deaths.",
        }
    },
    {
        question: "What is the name of the highest court in the UK?",
        answers: [
            "The Court of Appeal",
            "The High Court",
            "The Supreme Court",
            "The Privy Council",
        ],
        correctAnswers: [
            "The Supreme Court",
        ],
        explanation: "The Supreme Court is the highest court in the UK.",
        optionExplanations: {
            "The Court of Appeal": "The Court of Appeal is incorrect. The correct answer is The Supreme Court. The Supreme Court is the highest court in the UK.",
            "The High Court": "The High Court is incorrect. The correct answer is The Supreme Court. The Supreme Court is the highest court in the UK.",
            "The Supreme Court": "The Supreme Court is correct. The Supreme Court is the highest court in the UK.",
            "The Privy Council": "The Privy Council is incorrect. The correct answer is The Supreme Court. The Supreme Court is the highest court in the UK.",
        }
    },
    {
        question: "Who appoints judges in the UK?",
        answers: [
            "The Prime Minister",
            "Parliament",
            "The Archbishop of Canterbury",
            "The Monarch, on the advice of the Lord Chancellor",
        ],
        correctAnswers: [
            "The Monarch, on the advice of the Lord Chancellor",
        ],
        explanation: "Judges in the UK are appointed by the Monarch on the advice of the Lord Chancellor.",
        optionExplanations: {
            "The Prime Minister": "The Prime Minister is incorrect. The correct answer is The Monarch, on the advice of the Lord Chancellor. Judges in the UK are appointed by the Monarch on the advice of the Lord Chancellor.",
            "Parliament": "Parliament is incorrect. The correct answer is The Monarch, on the advice of the Lord Chancellor. Judges in the UK are appointed by the Monarch on the advice of the Lord Chancellor.",
            "The Archbishop of Canterbury": "The Archbishop of Canterbury is incorrect. The correct answer is The Monarch, on the advice of the Lord Chancellor. Judges in the UK are appointed by the Monarch on the advice of the Lord Chancellor.",
            "The Monarch, on the advice of the Lord Chancellor": "The Monarch, on the advice of the Lord Chancellor is correct. Judges in the UK are appointed by the Monarch on the advice of the Lord Chancellor.",
        }
    },
    {
        question: "What is the name of the police force in Northern Ireland?",
        answers: [
            "The Royal Ulster Constabulary",
            "The Northern Ireland Police Service",
            "The Police Service of Northern Ireland (PSNI)",
            "The Ulster Constabulary",
        ],
        correctAnswers: [
            "The Police Service of Northern Ireland (PSNI)",
        ],
        explanation: "The police force in Northern Ireland is the PSNI.",
        optionExplanations: {
            "The Royal Ulster Constabulary": "The Royal Ulster Constabulary is incorrect. The correct answer is The Police Service of Northern Ireland (PSNI). The police force in Northern Ireland is the PSNI.",
            "The Northern Ireland Police Service": "The Northern Ireland Police Service is incorrect. The correct answer is The Police Service of Northern Ireland (PSNI). The police force in Northern Ireland is the PSNI.",
            "The Police Service of Northern Ireland (PSNI)": "The Police Service of Northern Ireland (PSNI) is correct. The police force in Northern Ireland is the PSNI.",
            "The Ulster Constabulary": "The Ulster Constabulary is incorrect. The correct answer is The Police Service of Northern Ireland (PSNI). The police force in Northern Ireland is the PSNI.",
        }
    },
    {
        question: "At what age can a person stand for election to Parliament?",
        answers: [
            "16",
            "18",
            "21",
            "25",
        ],
        correctAnswers: [
            "18",
        ],
        explanation: "A person can stand for election to Parliament at age 18.",
        optionExplanations: {
            "16": "16 is incorrect. The correct answer is 18. A person can stand for election to Parliament at age 18.",
            "18": "18 is correct. A person can stand for election to Parliament at age 18.",
            "21": "21 is incorrect. The correct answer is 18. A person can stand for election to Parliament at age 18.",
            "25": "25 is incorrect. The correct answer is 18. A person can stand for election to Parliament at age 18.",
        }
    },
    {
        question: "What is the name of the official residence of the monarch in London?",
        answers: [
            "Kensington Palace",
            "Windsor Castle",
            "Clarence House",
            "Buckingham Palace",
        ],
        correctAnswers: [
            "Buckingham Palace",
        ],
        explanation: "Buckingham Palace is the official residence of the monarch in London.",
        optionExplanations: {
            "Kensington Palace": "Kensington Palace is incorrect. The correct answer is Buckingham Palace. Buckingham Palace is the official residence of the monarch in London.",
            "Windsor Castle": "Windsor Castle is incorrect. The correct answer is Buckingham Palace. Buckingham Palace is the official residence of the monarch in London.",
            "Clarence House": "Clarence House is incorrect. The correct answer is Buckingham Palace. Buckingham Palace is the official residence of the monarch in London.",
            "Buckingham Palace": "Buckingham Palace is correct. Buckingham Palace is the official residence of the monarch in London.",
        }
    },
    {
        question: "What is the name of the residence used by the monarch in Scotland?",
        answers: [
            "Balmoral Castle (Holyroodhouse)",
            "Stirling Castle",
            "Palace of Holyroodhouse",
            "Edinburgh Castle",
        ],
        correctAnswers: [
            "Palace of Holyroodhouse",
        ],
        explanation: "The Palace of Holyroodhouse is used by the monarch in Scotland.",
        optionExplanations: {
            "Balmoral Castle (Holyroodhouse)": "Balmoral Castle (Holyroodhouse) is incorrect. The correct answer is Palace of Holyroodhouse. The Palace of Holyroodhouse is used by the monarch in Scotland.",
            "Stirling Castle": "Stirling Castle is incorrect. The correct answer is Palace of Holyroodhouse. The Palace of Holyroodhouse is used by the monarch in Scotland.",
            "Palace of Holyroodhouse": "Palace of Holyroodhouse is correct. The Palace of Holyroodhouse is used by the monarch in Scotland.",
            "Edinburgh Castle": "Edinburgh Castle is incorrect. The correct answer is Palace of Holyroodhouse. The Palace of Holyroodhouse is used by the monarch in Scotland.",
        }
    },
    {
        question: "How many countries are in the Commonwealth?",
        answers: [
            "34",
            "42",
            "54",
            "60",
        ],
        correctAnswers: [
            "54",
        ],
        explanation: "There are 54 countries in the Commonwealth.",
        optionExplanations: {
            "34": "34 is incorrect. The correct answer is 54. There are 54 countries in the Commonwealth.",
            "42": "42 is incorrect. The correct answer is 54. There are 54 countries in the Commonwealth.",
            "54": "54 is correct. There are 54 countries in the Commonwealth.",
            "60": "60 is incorrect. The correct answer is 54. There are 54 countries in the Commonwealth.",
        }
    },
    {
        question: "Who is the head of the Commonwealth?",
        answers: [
            "The UN Secretary-General",
            "The British Prime Minister",
            "The British Monarch",
            "The President of South Africa",
        ],
        correctAnswers: [
            "The British Monarch",
        ],
        explanation: "The British Monarch is the head of the Commonwealth.",
        optionExplanations: {
            "The UN Secretary-General": "The UN Secretary-General is incorrect. The correct answer is The British Monarch. The British Monarch is the head of the Commonwealth.",
            "The British Prime Minister": "The British Prime Minister is incorrect. The correct answer is The British Monarch. The British Monarch is the head of the Commonwealth.",
            "The British Monarch": "The British Monarch is correct. The British Monarch is the head of the Commonwealth.",
            "The President of South Africa": "The President of South Africa is incorrect. The correct answer is The British Monarch. The British Monarch is the head of the Commonwealth.",
        }
    },
    {
        question: "What year did the UK leave the European Union (Brexit)?",
        answers: [
            "2016",
            "2018",
            "2020",
            "2021",
        ],
        correctAnswers: [
            "2020",
        ],
        explanation: "The UK left the EU in 2020.",
        optionExplanations: {
            "2016": "2016 is incorrect. The correct answer is 2020. The UK left the EU in 2020.",
            "2018": "2018 is incorrect. The correct answer is 2020. The UK left the EU in 2020.",
            "2020": "2020 is correct. The UK left the EU in 2020.",
            "2021": "2021 is incorrect. The correct answer is 2020. The UK left the EU in 2020.",
        }
    },
    {
        question: "In which year was the Good Friday Agreement signed, bringing peace to Northern Ireland?",
        answers: [
            "1993",
            "1995",
            "2000",
            "1998",
        ],
        correctAnswers: [
            "1998",
        ],
        explanation: "The Good Friday Agreement was signed in 1998.",
        optionExplanations: {
            "1993": "1993 is incorrect. The correct answer is 1998. The Good Friday Agreement was signed in 1998.",
            "1995": "1995 is incorrect. The correct answer is 1998. The Good Friday Agreement was signed in 1998.",
            "2000": "2000 is incorrect. The correct answer is 1998. The Good Friday Agreement was signed in 1998.",
            "1998": "1998 is correct. The Good Friday Agreement was signed in 1998.",
        }
    },
    {
        question: "What is the name of the system used in Scotland for criminal jury trials?",
        answers: [
            "Majority verdict",
            "Unanimous verdict",
            "Verdict by simple majority (15 jurors)",
            "Verdict by 12 jurors only",
        ],
        correctAnswers: [
            "Verdict by simple majority (15 jurors)",
        ],
        explanation: "In Scotland, criminal jury trials use a verdict by simple majority of 15 jurors.",
        optionExplanations: {
            "Majority verdict": "Majority verdict is incorrect. The correct answer is Verdict by simple majority (15 jurors). In Scotland, criminal jury trials use a verdict by simple majority of 15 jurors.",
            "Unanimous verdict": "Unanimous verdict is incorrect. The correct answer is Verdict by simple majority (15 jurors). In Scotland, criminal jury trials use a verdict by simple majority of 15 jurors.",
            "Verdict by simple majority (15 jurors)": "Verdict by simple majority (15 jurors) is correct. In Scotland, criminal jury trials use a verdict by simple majority of 15 jurors.",
            "Verdict by 12 jurors only": "Verdict by 12 jurors only is incorrect. The correct answer is Verdict by simple majority (15 jurors). In Scotland, criminal jury trials use a verdict by simple majority of 15 jurors.",
        }
    },
    {
        question: "In Scotland, what is the third verdict available to a jury, besides \"guilty\" and \"not guilty\"?",
        answers: [
            "Inconclusive",
            "Undecided",
            "Not proven",
            "Acquitted",
        ],
        correctAnswers: [
            "Not proven",
        ],
        explanation: "In Scotland, the third verdict is 'not proven'.",
        optionExplanations: {
            "Inconclusive": "Inconclusive is incorrect. The correct answer is Not proven. In Scotland, the third verdict is 'not proven'.",
            "Undecided": "Undecided is incorrect. The correct answer is Not proven. In Scotland, the third verdict is 'not proven'.",
            "Not proven": "Not proven is correct. In Scotland, the third verdict is 'not proven'.",
            "Acquitted": "Acquitted is incorrect. The correct answer is Not proven. In Scotland, the third verdict is 'not proven'.",
        }
    },
    {
        question: "What is the name of the legal officer in Scotland who is equivalent to a solicitor in England?",
        answers: [
            "Advocate",
            "Procurator Fiscal",
            "Solicitor (also used in Scotland)",
            "Sheriff",
        ],
        correctAnswers: [
            "Solicitor (also used in Scotland)",
        ],
        explanation: "In Scotland, the equivalent to a solicitor in England is a solicitor.",
        optionExplanations: {
            "Advocate": "Advocate is incorrect. The correct answer is Solicitor (also used in Scotland). In Scotland, the equivalent to a solicitor in England is a solicitor.",
            "Procurator Fiscal": "Procurator Fiscal is incorrect. The correct answer is Solicitor (also used in Scotland). In Scotland, the equivalent to a solicitor in England is a solicitor.",
            "Solicitor (also used in Scotland)": "Solicitor (also used in Scotland) is correct. In Scotland, the equivalent to a solicitor in England is a solicitor.",
            "Sheriff": "Sheriff is incorrect. The correct answer is Solicitor (also used in Scotland). In Scotland, the equivalent to a solicitor in England is a solicitor.",
        }
    },
    {
        question: "What is a \"Sheriff Court\" in Scotland?",
        answers: [
            "A court dealing only with civil matters",
            "The highest court in Scotland",
            "A court dealing with most criminal and civil cases in Scotland",
            "A court for juvenile offenders",
        ],
        correctAnswers: [
            "A court dealing with most criminal and civil cases in Scotland",
        ],
        explanation: "A Sheriff Court deals with most criminal and civil cases in Scotland.",
        optionExplanations: {
            "A court dealing only with civil matters": "A court dealing only with civil matters is incorrect. The correct answer is A court dealing with most criminal and civil cases in Scotland. A Sheriff Court deals with most criminal and civil cases in Scotland.",
            "The highest court in Scotland": "The highest court in Scotland is incorrect. The correct answer is A court dealing with most criminal and civil cases in Scotland. A Sheriff Court deals with most criminal and civil cases in Scotland.",
            "A court dealing with most criminal and civil cases in Scotland": "A court dealing with most criminal and civil cases in Scotland is correct. A Sheriff Court deals with most criminal and civil cases in Scotland.",
            "A court for juvenile offenders": "A court for juvenile offenders is incorrect. The correct answer is A court dealing with most criminal and civil cases in Scotland. A Sheriff Court deals with most criminal and civil cases in Scotland.",
        }
    },
    {
        question: "What is the name of the senior judge in Scotland equivalent to the Lord Chief Justice in England?",
        answers: [
            "The Lord Advocate",
            "The Lord President",
            "The Lord Chancellor",
            "The Procurator Fiscal",
        ],
        correctAnswers: [
            "The Lord President",
        ],
        explanation: "The Lord President is the senior judge in Scotland.",
        optionExplanations: {
            "The Lord Advocate": "The Lord Advocate is incorrect. The correct answer is The Lord President. The Lord President is the senior judge in Scotland.",
            "The Lord President": "The Lord President is correct. The Lord President is the senior judge in Scotland.",
            "The Lord Chancellor": "The Lord Chancellor is incorrect. The correct answer is The Lord President. The Lord President is the senior judge in Scotland.",
            "The Procurator Fiscal": "The Procurator Fiscal is incorrect. The correct answer is The Lord President. The Lord President is the senior judge in Scotland.",
        }
    },
    {
        question: "Where is the Giant's Causeway located?",
        answers: [
            "Scotland",
            "Wales",
            "England",
            "Northern Ireland",
        ],
        correctAnswers: [
            "Northern Ireland",
        ],
        explanation: "The Giant's Causeway is located in Northern Ireland.",
        optionExplanations: {
            "Scotland": "Scotland is incorrect. The correct answer is Northern Ireland. The Giant's Causeway is located in Northern Ireland.",
            "Wales": "Wales is incorrect. The correct answer is Northern Ireland. The Giant's Causeway is located in Northern Ireland.",
            "England": "England is incorrect. The correct answer is Northern Ireland. The Giant's Causeway is located in Northern Ireland.",
            "Northern Ireland": "Northern Ireland is correct. The Giant's Causeway is located in Northern Ireland.",
        }
    },
    {
        question: "What is the Giant's Causeway made of?",
        answers: [
            "Granite rocks",
            "Limestone columns",
            "Basalt columns",
            "Sandstone formations",
        ],
        correctAnswers: [
            "Basalt columns",
        ],
        explanation: "The Giant's Causeway is made of basalt columns.",
        optionExplanations: {
            "Granite rocks": "Granite rocks is incorrect. The correct answer is Basalt columns. The Giant's Causeway is made of basalt columns.",
            "Limestone columns": "Limestone columns is incorrect. The correct answer is Basalt columns. The Giant's Causeway is made of basalt columns.",
            "Basalt columns": "Basalt columns is correct. The Giant's Causeway is made of basalt columns.",
            "Sandstone formations": "Sandstone formations is incorrect. The correct answer is Basalt columns. The Giant's Causeway is made of basalt columns.",
        }
    },
    {
        question: "Which is the largest of the UK's national parks?",
        answers: [
            "The Peak District",
            "Snowdonia",
            "The Lake District",
            "The Cairngorms",
        ],
        correctAnswers: [
            "The Cairngorms",
        ],
        explanation: "The Cairngorms is the largest national park in the UK.",
        optionExplanations: {
            "The Peak District": "The Peak District is incorrect. The correct answer is The Cairngorms. The Cairngorms is the largest national park in the UK.",
            "Snowdonia": "Snowdonia is incorrect. The correct answer is The Cairngorms. The Cairngorms is the largest national park in the UK.",
            "The Lake District": "The Lake District is incorrect. The correct answer is The Cairngorms. The Cairngorms is the largest national park in the UK.",
            "The Cairngorms": "The Cairngorms is correct. The Cairngorms is the largest national park in the UK.",
        }
    },
    {
        question: "Ben Nevis is the highest mountain in the UK. In which country is it located?",
        answers: [
            "Wales",
            "England",
            "Northern Ireland",
            "Scotland",
        ],
        correctAnswers: [
            "Scotland",
        ],
        explanation: "Ben Nevis is located in Scotland.",
        optionExplanations: {
            "Wales": "Wales is incorrect. The correct answer is Scotland. Ben Nevis is located in Scotland.",
            "England": "England is incorrect. The correct answer is Scotland. Ben Nevis is located in Scotland.",
            "Northern Ireland": "Northern Ireland is incorrect. The correct answer is Scotland. Ben Nevis is located in Scotland.",
            "Scotland": "Scotland is correct. Ben Nevis is located in Scotland.",
        }
    },
    {
        question: "What is the longest river in the UK?",
        answers: [
            "The Thames",
            "The Trent",
            "The Clyde",
            "The Severn",
        ],
        correctAnswers: [
            "The Severn",
        ],
        explanation: "The Severn is the longest river in the UK.",
        optionExplanations: {
            "The Thames": "The Thames is incorrect. The correct answer is The Severn. The Severn is the longest river in the UK.",
            "The Trent": "The Trent is incorrect. The correct answer is The Severn. The Severn is the longest river in the UK.",
            "The Clyde": "The Clyde is incorrect. The correct answer is The Severn. The Severn is the longest river in the UK.",
            "The Severn": "The Severn is correct. The Severn is the longest river in the UK.",
        }
    },
    {
        question: "Which river flows through London?",
        answers: [
            "The Severn",
            "The Trent",
            "The Thames",
            "The Avon",
        ],
        correctAnswers: [
            "The Thames",
        ],
        explanation: "The Thames flows through London.",
        optionExplanations: {
            "The Severn": "The Severn is incorrect. The correct answer is The Thames. The Thames flows through London.",
            "The Trent": "The Trent is incorrect. The correct answer is The Thames. The Thames flows through London.",
            "The Thames": "The Thames is correct. The Thames flows through London.",
            "The Avon": "The Avon is incorrect. The correct answer is The Thames. The Thames flows through London.",
        }
    },
    {
        question: "What is the capital city of Wales?",
        answers: [
            "Swansea",
            "Newport",
            "Wrexham",
            "Cardiff",
        ],
        correctAnswers: [
            "Cardiff",
        ],
        explanation: "Cardiff is the capital city of Wales.",
        optionExplanations: {
            "Swansea": "Swansea is incorrect. The correct answer is Cardiff. Cardiff is the capital city of Wales.",
            "Newport": "Newport is incorrect. The correct answer is Cardiff. Cardiff is the capital city of Wales.",
            "Wrexham": "Wrexham is incorrect. The correct answer is Cardiff. Cardiff is the capital city of Wales.",
            "Cardiff": "Cardiff is correct. Cardiff is the capital city of Wales.",
        }
    },
    {
        question: "What is the capital city of Scotland?",
        answers: [
            "Glasgow",
            "Aberdeen",
            "Dundee",
            "Edinburgh",
        ],
        correctAnswers: [
            "Edinburgh",
        ],
        explanation: "Edinburgh is the capital city of Scotland.",
        optionExplanations: {
            "Glasgow": "Glasgow is incorrect. The correct answer is Edinburgh. Edinburgh is the capital city of Scotland.",
            "Aberdeen": "Aberdeen is incorrect. The correct answer is Edinburgh. Edinburgh is the capital city of Scotland.",
            "Dundee": "Dundee is incorrect. The correct answer is Edinburgh. Edinburgh is the capital city of Scotland.",
            "Edinburgh": "Edinburgh is correct. Edinburgh is the capital city of Scotland.",
        }
    },
    {
        question: "Which of the following is the largest city in Scotland?",
        answers: [
            "Edinburgh",
            "Dundee",
            "Glasgow",
            "Aberdeen",
        ],
        correctAnswers: [
            "Glasgow",
        ],
        explanation: "Glasgow is the largest city in Scotland.",
        optionExplanations: {
            "Edinburgh": "Edinburgh is incorrect. The correct answer is Glasgow. Glasgow is the largest city in Scotland.",
            "Dundee": "Dundee is incorrect. The correct answer is Glasgow. Glasgow is the largest city in Scotland.",
            "Glasgow": "Glasgow is correct. Glasgow is the largest city in Scotland.",
            "Aberdeen": "Aberdeen is incorrect. The correct answer is Glasgow. Glasgow is the largest city in Scotland.",
        }
    },
    {
        question: "What are the colours of the Union Jack?",
        answers: [
            "Red, white and green",
            "Blue, white and yellow",
            "Red, green and blue",
            "Red, white and blue",
        ],
        correctAnswers: [
            "Red, white and blue",
        ],
        explanation: "The Union Jack has the colours red, white and blue.",
        optionExplanations: {
            "Red, white and green": "Red, white and green is incorrect. The correct answer is Red, white and blue. The Union Jack has the colours red, white and blue.",
            "Blue, white and yellow": "Blue, white and yellow is incorrect. The correct answer is Red, white and blue. The Union Jack has the colours red, white and blue.",
            "Red, green and blue": "Red, green and blue is incorrect. The correct answer is Red, white and blue. The Union Jack has the colours red, white and blue.",
            "Red, white and blue": "Red, white and blue is correct. The Union Jack has the colours red, white and blue.",
        }
    },
    {
        question: "The Union Jack is the national flag of:",
        answers: [
            "England",
            "Scotland",
            "Wales",
            "The United Kingdom",
        ],
        correctAnswers: [
            "The United Kingdom",
        ],
        explanation: "The Union Jack is the national flag of the United Kingdom.",
        optionExplanations: {
            "England": "England is incorrect. The correct answer is The United Kingdom. The Union Jack is the national flag of the United Kingdom.",
            "Scotland": "Scotland is incorrect. The correct answer is The United Kingdom. The Union Jack is the national flag of the United Kingdom.",
            "Wales": "Wales is incorrect. The correct answer is The United Kingdom. The Union Jack is the national flag of the United Kingdom.",
            "The United Kingdom": "The United Kingdom is correct. The Union Jack is the national flag of the United Kingdom.",
        }
    },
    {
        question: "Which cross represents England on the Union Jack?",
        answers: [
            "The Cross of St Andrew",
            "The Cross of St Patrick",
            "The Cross of St David",
            "The Cross of St George",
        ],
        correctAnswers: [
            "The Cross of St George",
        ],
        explanation: "The Cross of St George represents England on the Union Jack.",
        optionExplanations: {
            "The Cross of St Andrew": "The Cross of St Andrew is incorrect. The correct answer is The Cross of St George. The Cross of St George represents England on the Union Jack.",
            "The Cross of St Patrick": "The Cross of St Patrick is incorrect. The correct answer is The Cross of St George. The Cross of St George represents England on the Union Jack.",
            "The Cross of St David": "The Cross of St David is incorrect. The correct answer is The Cross of St George. The Cross of St George represents England on the Union Jack.",
            "The Cross of St George": "The Cross of St George is correct. The Cross of St George represents England on the Union Jack.",
        }
    },
    {
        question: "Which cross represents Scotland on the Union Jack?",
        answers: [
            "The Cross of St George",
            "The Cross of St Patrick",
            "The Cross of St David",
            "The Cross of St Andrew",
        ],
        correctAnswers: [
            "The Cross of St Andrew",
        ],
        explanation: "The Cross of St Andrew represents Scotland on the Union Jack.",
        optionExplanations: {
            "The Cross of St George": "The Cross of St George is incorrect. The correct answer is The Cross of St Andrew. The Cross of St Andrew represents Scotland on the Union Jack.",
            "The Cross of St Patrick": "The Cross of St Patrick is incorrect. The correct answer is The Cross of St Andrew. The Cross of St Andrew represents Scotland on the Union Jack.",
            "The Cross of St David": "The Cross of St David is incorrect. The correct answer is The Cross of St Andrew. The Cross of St Andrew represents Scotland on the Union Jack.",
            "The Cross of St Andrew": "The Cross of St Andrew is correct. The Cross of St Andrew represents Scotland on the Union Jack.",
        }
    },
    {
        question: "Wales is NOT represented on the Union Jack. True or False?",
        answers: [
            "True",
            "False",
            "Wales has its own separate flag",
            "Wales is represented by the dragon",
        ],
        correctAnswers: [
            "True",
        ],
        explanation: "Wales is not represented on the Union Jack.",
        optionExplanations: {
            "True": "True is correct. Wales is not represented on the Union Jack.",
            "False": "False is incorrect. The correct answer is True. Wales is not represented on the Union Jack.",
            "Wales has its own separate flag": "Wales has its own separate flag is incorrect. The correct answer is True. Wales is not represented on the Union Jack.",
            "Wales is represented by the dragon": "Wales is represented by the dragon is incorrect. The correct answer is True. Wales is not represented on the Union Jack.",
        }
    },
    {
        question: "What is the English name for \"Eisteddfod\"?",
        answers: [
            "A Welsh sporting event",
            "A Scottish Highland Games",
            "A Welsh festival of literature, music and performance",
            "A religious pilgrimage",
        ],
        correctAnswers: [
            "A Welsh festival of literature, music and performance",
        ],
        explanation: "Eisteddfod is a Welsh festival of literature, music and performance.",
        optionExplanations: {
            "A Welsh sporting event": "A Welsh sporting event is incorrect. The correct answer is A Welsh festival of literature, music and performance. Eisteddfod is a Welsh festival of literature, music and performance.",
            "A Scottish Highland Games": "A Scottish Highland Games is incorrect. The correct answer is A Welsh festival of literature, music and performance. Eisteddfod is a Welsh festival of literature, music and performance.",
            "A Welsh festival of literature, music and performance": "A Welsh festival of literature, music and performance is correct. Eisteddfod is a Welsh festival of literature, music and performance.",
            "A religious pilgrimage": "A religious pilgrimage is incorrect. The correct answer is A Welsh festival of literature, music and performance. Eisteddfod is a Welsh festival of literature, music and performance.",
        }
    },
    {
        question: "Which building in London is associated with the Ceremony of the Keys each night?",
        answers: [
            "Buckingham Palace",
            "Westminster Abbey",
            "The Tower of London",
            "St Paul's Cathedral",
        ],
        correctAnswers: [
            "The Tower of London",
        ],
        explanation: "The Ceremony of the Keys takes place at the Tower of London.",
        optionExplanations: {
            "Buckingham Palace": "Buckingham Palace is incorrect. The correct answer is The Tower of London. The Ceremony of the Keys takes place at the Tower of London.",
            "Westminster Abbey": "Westminster Abbey is incorrect. The correct answer is The Tower of London. The Ceremony of the Keys takes place at the Tower of London.",
            "The Tower of London": "The Tower of London is correct. The Ceremony of the Keys takes place at the Tower of London.",
            "St Paul's Cathedral": "St Paul's Cathedral is incorrect. The correct answer is The Tower of London. The Ceremony of the Keys takes place at the Tower of London.",
        }
    },
    {
        question: "Stonehenge is located in which English county?",
        answers: [
            "Cornwall",
            "Devon",
            "Dorset",
            "Wiltshire",
        ],
        correctAnswers: [
            "Wiltshire",
        ],
        explanation: "Stonehenge is located in Wiltshire.",
        optionExplanations: {
            "Cornwall": "Cornwall is incorrect. The correct answer is Wiltshire. Stonehenge is located in Wiltshire.",
            "Devon": "Devon is incorrect. The correct answer is Wiltshire. Stonehenge is located in Wiltshire.",
            "Dorset": "Dorset is incorrect. The correct answer is Wiltshire. Stonehenge is located in Wiltshire.",
            "Wiltshire": "Wiltshire is correct. Stonehenge is located in Wiltshire.",
        }
    },
    {
        question: "What is the name of the prehistoric monument near Salisbury?",
        answers: [
            "Avebury",
            "Skara Brae",
            "Stonehenge",
            "Maiden Castle",
        ],
        correctAnswers: [
            "Stonehenge",
        ],
        explanation: "Stonehenge is the prehistoric monument near Salisbury.",
        optionExplanations: {
            "Avebury": "Avebury is incorrect. The correct answer is Stonehenge. Stonehenge is the prehistoric monument near Salisbury.",
            "Skara Brae": "Skara Brae is incorrect. The correct answer is Stonehenge. Stonehenge is the prehistoric monument near Salisbury.",
            "Stonehenge": "Stonehenge is correct. Stonehenge is the prehistoric monument near Salisbury.",
            "Maiden Castle": "Maiden Castle is incorrect. The correct answer is Stonehenge. Stonehenge is the prehistoric monument near Salisbury.",
        }
    },
    {
        question: "What is the approximate length of Hadrian's Wall?",
        answers: [
            "50 miles",
            "73 miles",
            "100 miles",
            "120 miles",
        ],
        correctAnswers: [
            "73 miles",
        ],
        explanation: "Hadrian's Wall is approximately 73 miles long.",
        optionExplanations: {
            "50 miles": "50 miles is incorrect. The correct answer is 73 miles. Hadrian's Wall is approximately 73 miles long.",
            "73 miles": "73 miles is correct. Hadrian's Wall is approximately 73 miles long.",
            "100 miles": "100 miles is incorrect. The correct answer is 73 miles. Hadrian's Wall is approximately 73 miles long.",
            "120 miles": "120 miles is incorrect. The correct answer is 73 miles. Hadrian's Wall is approximately 73 miles long.",
        }
    },
    {
        question: "Hadrian's Wall was built by which emperor?",
        answers: [
            "Julius Caesar",
            "Augustus",
            "Claudius",
            "Emperor Hadrian",
        ],
        correctAnswers: [
            "Emperor Hadrian",
        ],
        explanation: "Hadrian's Wall was built by Emperor Hadrian.",
        optionExplanations: {
            "Julius Caesar": "Julius Caesar is incorrect. The correct answer is Emperor Hadrian. Hadrian's Wall was built by Emperor Hadrian.",
            "Augustus": "Augustus is incorrect. The correct answer is Emperor Hadrian. Hadrian's Wall was built by Emperor Hadrian.",
            "Claudius": "Claudius is incorrect. The correct answer is Emperor Hadrian. Hadrian's Wall was built by Emperor Hadrian.",
            "Emperor Hadrian": "Emperor Hadrian is correct. Hadrian's Wall was built by Emperor Hadrian.",
        }
    },
    {
        question: "What was the purpose of Hadrian's Wall?",
        answers: [
            "To mark the border with Wales",
            "To channel water from Scotland to England",
            "To defend the northern frontier of Roman Britain",
            "To separate different English kingdoms",
        ],
        correctAnswers: [
            "To defend the northern frontier of Roman Britain",
        ],
        explanation: "Hadrian's Wall was built to defend the northern frontier of Roman Britain.",
        optionExplanations: {
            "To mark the border with Wales": "To mark the border with Wales is incorrect. The correct answer is To defend the northern frontier of Roman Britain. Hadrian's Wall was built to defend the northern frontier of Roman Britain.",
            "To channel water from Scotland to England": "To channel water from Scotland to England is incorrect. The correct answer is To defend the northern frontier of Roman Britain. Hadrian's Wall was built to defend the northern frontier of Roman Britain.",
            "To defend the northern frontier of Roman Britain": "To defend the northern frontier of Roman Britain is correct. Hadrian's Wall was built to defend the northern frontier of Roman Britain.",
            "To separate different English kingdoms": "To separate different English kingdoms is incorrect. The correct answer is To defend the northern frontier of Roman Britain. Hadrian's Wall was built to defend the northern frontier of Roman Britain.",
        }
    },
    {
        question: "The Romans left Britain in approximately which year?",
        answers: [
            "AD 410",
            "AD 300",
            "AD 450",
            "AD 500",
        ],
        correctAnswers: [
            "AD 410",
        ],
        explanation: "The Romans left Britain around AD 410.",
        optionExplanations: {
            "AD 410": "AD 410 is correct. The Romans left Britain around AD 410.",
            "AD 300": "AD 300 is incorrect. The correct answer is AD 410. The Romans left Britain around AD 410.",
            "AD 450": "AD 450 is incorrect. The correct answer is AD 410. The Romans left Britain around AD 410.",
            "AD 500": "AD 500 is incorrect. The correct answer is AD 410. The Romans left Britain around AD 410.",
        }
    },
    {
        question: "Who invaded Britain in 43 AD?",
        answers: [
            "The Vikings",
            "The Normans",
            "The Saxons",
            "The Romans",
        ],
        correctAnswers: [
            "The Romans",
        ],
        explanation: "The Romans invaded Britain in 43 AD.",
        optionExplanations: {
            "The Vikings": "The Vikings is incorrect. The correct answer is The Romans. The Romans invaded Britain in 43 AD.",
            "The Normans": "The Normans is incorrect. The correct answer is The Romans. The Romans invaded Britain in 43 AD.",
            "The Saxons": "The Saxons is incorrect. The correct answer is The Romans. The Romans invaded Britain in 43 AD.",
            "The Romans": "The Romans is correct. The Romans invaded Britain in 43 AD.",
        }
    },
    {
        question: "Which group of people invaded Britain from Scandinavia from around the 8th century?",
        answers: [
            "The Romans",
            "The Normans",
            "The Saxons",
            "The Vikings",
        ],
        correctAnswers: [
            "The Vikings",
        ],
        explanation: "The Vikings invaded Britain from Scandinavia around the 8th century.",
        optionExplanations: {
            "The Romans": "The Romans is incorrect. The correct answer is The Vikings. The Vikings invaded Britain from Scandinavia around the 8th century.",
            "The Normans": "The Normans is incorrect. The correct answer is The Vikings. The Vikings invaded Britain from Scandinavia around the 8th century.",
            "The Saxons": "The Saxons is incorrect. The correct answer is The Vikings. The Vikings invaded Britain from Scandinavia around the 8th century.",
            "The Vikings": "The Vikings is correct. The Vikings invaded Britain from Scandinavia around the 8th century.",
        }
    },
    {
        question: "Who was Alfred the Great?",
        answers: [
            "A Viking king",
            "A Norman lord",
            "A Saxon king who fought off Viking invasions",
            "A Roman emperor",
        ],
        correctAnswers: [
            "A Saxon king who fought off Viking invasions",
        ],
        explanation: "Alfred the Great was a Saxon king who fought off Viking invasions.",
        optionExplanations: {
            "A Viking king": "A Viking king is incorrect. The correct answer is A Saxon king who fought off Viking invasions. Alfred the Great was a Saxon king who fought off Viking invasions.",
            "A Norman lord": "A Norman lord is incorrect. The correct answer is A Saxon king who fought off Viking invasions. Alfred the Great was a Saxon king who fought off Viking invasions.",
            "A Saxon king who fought off Viking invasions": "A Saxon king who fought off Viking invasions is correct. Alfred the Great was a Saxon king who fought off Viking invasions.",
            "A Roman emperor": "A Roman emperor is incorrect. The correct answer is A Saxon king who fought off Viking invasions. Alfred the Great was a Saxon king who fought off Viking invasions.",
        }
    },
    {
        question: "In what year did William of Normandy defeat King Harold at the Battle of Hastings?",
        answers: [
            "1050",
            "1066",
            "1087",
            "1100",
        ],
        correctAnswers: [
            "1066",
        ],
        explanation: "William of Normandy defeated King Harold at Hastings in 1066.",
        optionExplanations: {
            "1050": "1050 is incorrect. The correct answer is 1066. William of Normandy defeated King Harold at Hastings in 1066.",
            "1066": "1066 is correct. William of Normandy defeated King Harold at Hastings in 1066.",
            "1087": "1087 is incorrect. The correct answer is 1066. William of Normandy defeated King Harold at Hastings in 1066.",
            "1100": "1100 is incorrect. The correct answer is 1066. William of Normandy defeated King Harold at Hastings in 1066.",
        }
    },
    {
        question: "What was the Domesday Book?",
        answers: [
            "A religious text from the Middle Ages",
            "A record of the plague deaths",
            "A survey of all land and property in England commissioned by William I",
            "A list of laws passed by Parliament",
        ],
        correctAnswers: [
            "A survey of all land and property in England commissioned by William I",
        ],
        explanation: "The Domesday Book was a survey of land and property in England commissioned by William I.",
        optionExplanations: {
            "A religious text from the Middle Ages": "A religious text from the Middle Ages is incorrect. The correct answer is A survey of all land and property in England commissioned by William I. The Domesday Book was a survey of land and property in England commissioned by William I.",
            "A record of the plague deaths": "A record of the plague deaths is incorrect. The correct answer is A survey of all land and property in England commissioned by William I. The Domesday Book was a survey of land and property in England commissioned by William I.",
            "A survey of all land and property in England commissioned by William I": "A survey of all land and property in England commissioned by William I is correct. The Domesday Book was a survey of land and property in England commissioned by William I.",
            "A list of laws passed by Parliament": "A list of laws passed by Parliament is incorrect. The correct answer is A survey of all land and property in England commissioned by William I. The Domesday Book was a survey of land and property in England commissioned by William I.",
        }
    },
    {
        question: "Which King signed the Magna Carta?",
        answers: [
            "Henry II",
            "Richard I",
            "King John",
            "Edward I",
        ],
        correctAnswers: [
            "King John",
        ],
        explanation: "King John signed the Magna Carta.",
        optionExplanations: {
            "Henry II": "Henry II is incorrect. The correct answer is King John. King John signed the Magna Carta.",
            "Richard I": "Richard I is incorrect. The correct answer is King John. King John signed the Magna Carta.",
            "King John": "King John is correct. King John signed the Magna Carta.",
            "Edward I": "Edward I is incorrect. The correct answer is King John. King John signed the Magna Carta.",
        }
    },
    {
        question: "Who was the first person to print books in England using a printing press?",
        answers: [
            "Geoffrey Chaucer",
            "William Caxton",
            "Thomas More",
            "William Tyndale",
        ],
        correctAnswers: [
            "William Caxton",
        ],
        explanation: "William Caxton was the first to print books in England using a printing press.",
        optionExplanations: {
            "Geoffrey Chaucer": "Geoffrey Chaucer is incorrect. The correct answer is William Caxton. William Caxton was the first to print books in England using a printing press.",
            "William Caxton": "William Caxton is correct. William Caxton was the first to print books in England using a printing press.",
            "Thomas More": "Thomas More is incorrect. The correct answer is William Caxton. William Caxton was the first to print books in England using a printing press.",
            "William Tyndale": "William Tyndale is incorrect. The correct answer is William Caxton. William Caxton was the first to print books in England using a printing press.",
        }
    },
    {
        question: "Who wrote \"The Canterbury Tales\"?",
        answers: [
            "William Langland",
            "John Gower",
            "Geoffrey Chaucer",
            "Thomas Malory",
        ],
        correctAnswers: [
            "Geoffrey Chaucer",
        ],
        explanation: "Geoffrey Chaucer wrote 'The Canterbury Tales'.",
        optionExplanations: {
            "William Langland": "William Langland is incorrect. The correct answer is Geoffrey Chaucer. Geoffrey Chaucer wrote 'The Canterbury Tales'.",
            "John Gower": "John Gower is incorrect. The correct answer is Geoffrey Chaucer. Geoffrey Chaucer wrote 'The Canterbury Tales'.",
            "Geoffrey Chaucer": "Geoffrey Chaucer is correct. Geoffrey Chaucer wrote 'The Canterbury Tales'.",
            "Thomas Malory": "Thomas Malory is incorrect. The correct answer is Geoffrey Chaucer. Geoffrey Chaucer wrote 'The Canterbury Tales'.",
        }
    },
    {
        question: "What was the \"Reformation\"?",
        answers: [
            "The reorganisation of Parliament in the 14th century",
            "A series of wars between England and France",
            "A movement to reform the Catholic Church, leading to the creation of Protestant churches",
            "The reorganisation of the English legal system",
        ],
        correctAnswers: [
            "A movement to reform the Catholic Church, leading to the creation of Protestant churches",
        ],
        explanation: "The Reformation was a movement to reform the Catholic Church, leading to Protestant churches.",
        optionExplanations: {
            "The reorganisation of Parliament in the 14th century": "The reorganisation of Parliament in the 14th century is incorrect. The correct answer is A movement to reform the Catholic Church, leading to the creation of Protestant churches. The Reformation was a movement to reform the Catholic Church, leading to Protestant churches.",
            "A series of wars between England and France": "A series of wars between England and France is incorrect. The correct answer is A movement to reform the Catholic Church, leading to the creation of Protestant churches. The Reformation was a movement to reform the Catholic Church, leading to Protestant churches.",
            "A movement to reform the Catholic Church, leading to the creation of Protestant churches": "A movement to reform the Catholic Church, leading to the creation of Protestant churches is correct. The Reformation was a movement to reform the Catholic Church, leading to Protestant churches.",
            "The reorganisation of the English legal system": "The reorganisation of the English legal system is incorrect. The correct answer is A movement to reform the Catholic Church, leading to the creation of Protestant churches. The Reformation was a movement to reform the Catholic Church, leading to Protestant churches.",
        }
    },
    {
        question: "Henry VIII broke away from the Catholic Church to form the Church of England mainly because:",
        answers: [
            "He disagreed with Catholic doctrine",
            "He wanted to tax the church more",
            "The Pope refused to allow him to divorce his first wife",
            "He was influenced by Martin Luther",
        ],
        correctAnswers: [
            "The Pope refused to allow him to divorce his first wife",
        ],
        explanation: "Henry VIII broke away because the Pope refused to annul his marriage.",
        optionExplanations: {
            "He disagreed with Catholic doctrine": "He disagreed with Catholic doctrine is incorrect. The correct answer is The Pope refused to allow him to divorce his first wife. Henry VIII broke away because the Pope refused to annul his marriage.",
            "He wanted to tax the church more": "He wanted to tax the church more is incorrect. The correct answer is The Pope refused to allow him to divorce his first wife. Henry VIII broke away because the Pope refused to annul his marriage.",
            "The Pope refused to allow him to divorce his first wife": "The Pope refused to allow him to divorce his first wife is correct. Henry VIII broke away because the Pope refused to annul his marriage.",
            "He was influenced by Martin Luther": "He was influenced by Martin Luther is incorrect. The correct answer is The Pope refused to allow him to divorce his first wife. Henry VIII broke away because the Pope refused to annul his marriage.",
        }
    },
    {
        question: "Who was the \"Virgin Queen\"?",
        answers: [
            "Mary I",
            "Elizabeth I",
            "Mary Queen of Scots",
            "Lady Jane Grey",
        ],
        correctAnswers: [
            "Elizabeth I",
        ],
        explanation: "Elizabeth I was known as the 'Virgin Queen'.",
        optionExplanations: {
            "Mary I": "Mary I is incorrect. The correct answer is Elizabeth I. Elizabeth I was known as the 'Virgin Queen'.",
            "Elizabeth I": "Elizabeth I is correct. Elizabeth I was known as the 'Virgin Queen'.",
            "Mary Queen of Scots": "Mary Queen of Scots is incorrect. The correct answer is Elizabeth I. Elizabeth I was known as the 'Virgin Queen'.",
            "Lady Jane Grey": "Lady Jane Grey is incorrect. The correct answer is Elizabeth I. Elizabeth I was known as the 'Virgin Queen'.",
        }
    },
    {
        question: "What was the Spanish Armada?",
        answers: [
            "A Spanish trade fleet",
            "A fleet of Spanish ships sent to invade England in 1588",
            "A Spanish diplomatic mission to England",
            "A group of Spanish explorers",
        ],
        correctAnswers: [
            "A fleet of Spanish ships sent to invade England in 1588",
        ],
        explanation: "The Spanish Armada was a fleet sent to invade England in 1588.",
        optionExplanations: {
            "A Spanish trade fleet": "A Spanish trade fleet is incorrect. The correct answer is A fleet of Spanish ships sent to invade England in 1588. The Spanish Armada was a fleet sent to invade England in 1588.",
            "A fleet of Spanish ships sent to invade England in 1588": "A fleet of Spanish ships sent to invade England in 1588 is correct. The Spanish Armada was a fleet sent to invade England in 1588.",
            "A Spanish diplomatic mission to England": "A Spanish diplomatic mission to England is incorrect. The correct answer is A fleet of Spanish ships sent to invade England in 1588. The Spanish Armada was a fleet sent to invade England in 1588.",
            "A group of Spanish explorers": "A group of Spanish explorers is incorrect. The correct answer is A fleet of Spanish ships sent to invade England in 1588. The Spanish Armada was a fleet sent to invade England in 1588.",
        }
    },
    {
        question: "Who defeated the Spanish Armada?",
        answers: [
            "Henry VIII",
            "James I",
            "Elizabeth I (with Sir Francis Drake)",
            "Oliver Cromwell",
        ],
        correctAnswers: [
            "Elizabeth I (with Sir Francis Drake)",
        ],
        explanation: "Elizabeth I, with Sir Francis Drake, defeated the Spanish Armada.",
        optionExplanations: {
            "Henry VIII": "Henry VIII is incorrect. The correct answer is Elizabeth I (with Sir Francis Drake). Elizabeth I, with Sir Francis Drake, defeated the Spanish Armada.",
            "James I": "James I is incorrect. The correct answer is Elizabeth I (with Sir Francis Drake). Elizabeth I, with Sir Francis Drake, defeated the Spanish Armada.",
            "Elizabeth I (with Sir Francis Drake)": "Elizabeth I (with Sir Francis Drake) is correct. Elizabeth I, with Sir Francis Drake, defeated the Spanish Armada.",
            "Oliver Cromwell": "Oliver Cromwell is incorrect. The correct answer is Elizabeth I (with Sir Francis Drake). Elizabeth I, with Sir Francis Drake, defeated the Spanish Armada.",
        }
    },
    {
        question: "Who was Oliver Cromwell?",
        answers: [
            "A king of England",
            "A Scottish rebel leader",
            "A Parliamentary leader who ruled as Lord Protector after the English Civil War",
            "A Welsh poet",
        ],
        correctAnswers: [
            "A Parliamentary leader who ruled as Lord Protector after the English Civil War",
        ],
        explanation: "Oliver Cromwell was a Parliamentary leader who ruled as Lord Protector after the Civil War.",
        optionExplanations: {
            "A king of England": "A king of England is incorrect. The correct answer is A Parliamentary leader who ruled as Lord Protector after the English Civil War. Oliver Cromwell was a Parliamentary leader who ruled as Lord Protector after the Civil War.",
            "A Scottish rebel leader": "A Scottish rebel leader is incorrect. The correct answer is A Parliamentary leader who ruled as Lord Protector after the English Civil War. Oliver Cromwell was a Parliamentary leader who ruled as Lord Protector after the Civil War.",
            "A Parliamentary leader who ruled as Lord Protector after the English Civil War": "A Parliamentary leader who ruled as Lord Protector after the English Civil War is correct. Oliver Cromwell was a Parliamentary leader who ruled as Lord Protector after the Civil War.",
            "A Welsh poet": "A Welsh poet is incorrect. The correct answer is A Parliamentary leader who ruled as Lord Protector after the English Civil War. Oliver Cromwell was a Parliamentary leader who ruled as Lord Protector after the Civil War.",
        }
    },
    {
        question: "What happened to King Charles I in 1649?",
        answers: [
            "He abdicated and went into exile",
            "He was imprisoned for life",
            "He was tried and executed",
            "He died in battle",
        ],
        correctAnswers: [
            "He was tried and executed",
        ],
        explanation: "King Charles I was tried and executed in 1649.",
        optionExplanations: {
            "He abdicated and went into exile": "He abdicated and went into exile is incorrect. The correct answer is He was tried and executed. King Charles I was tried and executed in 1649.",
            "He was imprisoned for life": "He was imprisoned for life is incorrect. The correct answer is He was tried and executed. King Charles I was tried and executed in 1649.",
            "He was tried and executed": "He was tried and executed is correct. King Charles I was tried and executed in 1649.",
            "He died in battle": "He died in battle is incorrect. The correct answer is He was tried and executed. King Charles I was tried and executed in 1649.",
        }
    },
    {
        question: "When was the English Civil War fought?",
        answers: [
            "1600–1610",
            "1642–1651",
            "1660–1670",
            "1688–1700",
        ],
        correctAnswers: [
            "1642–1651",
        ],
        explanation: "The English Civil War was fought from 1642 to 1651.",
        optionExplanations: {
            "1600–1610": "1600–1610 is incorrect. The correct answer is 1642–1651. The English Civil War was fought from 1642 to 1651.",
            "1642–1651": "1642–1651 is correct. The English Civil War was fought from 1642 to 1651.",
            "1660–1670": "1660–1670 is incorrect. The correct answer is 1642–1651. The English Civil War was fought from 1642 to 1651.",
            "1688–1700": "1688–1700 is incorrect. The correct answer is 1642–1651. The English Civil War was fought from 1642 to 1651.",
        }
    },
    {
        question: "The Great Fire of London occurred in which year?",
        answers: [
            "1660",
            "1666",
            "1672",
            "1688",
        ],
        correctAnswers: [
            "1666",
        ],
        explanation: "The Great Fire of London occurred in 1666.",
        optionExplanations: {
            "1660": "1660 is incorrect. The correct answer is 1666. The Great Fire of London occurred in 1666.",
            "1666": "1666 is correct. The Great Fire of London occurred in 1666.",
            "1672": "1672 is incorrect. The correct answer is 1666. The Great Fire of London occurred in 1666.",
            "1688": "1688 is incorrect. The correct answer is 1666. The Great Fire of London occurred in 1666.",
        }
    },
    {
        question: "Which scientist developed the theory of gravity, famously inspired by a falling apple?",
        answers: [
            "Michael Faraday",
            "Charles Darwin",
            "Sir Isaac Newton",
            "Robert Boyle",
        ],
        correctAnswers: [
            "Sir Isaac Newton",
        ],
        explanation: "Sir Isaac Newton developed the theory of gravity, inspired by a falling apple.",
        optionExplanations: {
            "Michael Faraday": "Michael Faraday is incorrect. The correct answer is Sir Isaac Newton. Sir Isaac Newton developed the theory of gravity, inspired by a falling apple.",
            "Charles Darwin": "Charles Darwin is incorrect. The correct answer is Sir Isaac Newton. Sir Isaac Newton developed the theory of gravity, inspired by a falling apple.",
            "Sir Isaac Newton": "Sir Isaac Newton is correct. Sir Isaac Newton developed the theory of gravity, inspired by a falling apple.",
            "Robert Boyle": "Robert Boyle is incorrect. The correct answer is Sir Isaac Newton. Sir Isaac Newton developed the theory of gravity, inspired by a falling apple.",
        }
    },
    {
        question: "Charles Darwin is famous for developing which scientific theory?",
        answers: [
            "The theory of relativity",
            "The theory of gravity",
            "The theory of evolution by natural selection",
            "The germ theory of disease",
        ],
        correctAnswers: [
            "The theory of evolution by natural selection",
        ],
        explanation: "Charles Darwin developed the theory of evolution by natural selection.",
        optionExplanations: {
            "The theory of relativity": "The theory of relativity is incorrect. The correct answer is The theory of evolution by natural selection. Charles Darwin developed the theory of evolution by natural selection.",
            "The theory of gravity": "The theory of gravity is incorrect. The correct answer is The theory of evolution by natural selection. Charles Darwin developed the theory of evolution by natural selection.",
            "The theory of evolution by natural selection": "The theory of evolution by natural selection is correct. Charles Darwin developed the theory of evolution by natural selection.",
            "The germ theory of disease": "The germ theory of disease is incorrect. The correct answer is The theory of evolution by natural selection. Charles Darwin developed the theory of evolution by natural selection.",
        }
    },
    {
        question: "Who invented the telephone?",
        answers: [
            "Thomas Edison",
            "Guglielmo Marconi",
            "Nikola Tesla",
            "Alexander Graham Bell",
        ],
        correctAnswers: [
            "Alexander Graham Bell",
        ],
        explanation: "Alexander Graham Bell invented the telephone.",
        optionExplanations: {
            "Thomas Edison": "Thomas Edison is incorrect. The correct answer is Alexander Graham Bell. Alexander Graham Bell invented the telephone.",
            "Guglielmo Marconi": "Guglielmo Marconi is incorrect. The correct answer is Alexander Graham Bell. Alexander Graham Bell invented the telephone.",
            "Nikola Tesla": "Nikola Tesla is incorrect. The correct answer is Alexander Graham Bell. Alexander Graham Bell invented the telephone.",
            "Alexander Graham Bell": "Alexander Graham Bell is correct. Alexander Graham Bell invented the telephone.",
        }
    },
    {
        question: "Who was the first person to run a mile in under four minutes?",
        answers: [
            "Steve Ovett",
            "Sebastian Coe",
            "Mo Farah",
            "Roger Bannister",
        ],
        correctAnswers: [
            "Roger Bannister",
        ],
        explanation: "Roger Bannister was the first to run a mile in under four minutes.",
        optionExplanations: {
            "Steve Ovett": "Steve Ovett is incorrect. The correct answer is Roger Bannister. Roger Bannister was the first to run a mile in under four minutes.",
            "Sebastian Coe": "Sebastian Coe is incorrect. The correct answer is Roger Bannister. Roger Bannister was the first to run a mile in under four minutes.",
            "Mo Farah": "Mo Farah is incorrect. The correct answer is Roger Bannister. Roger Bannister was the first to run a mile in under four minutes.",
            "Roger Bannister": "Roger Bannister is correct. Roger Bannister was the first to run a mile in under four minutes.",
        }
    },
    {
        question: "Which Scotsman invented the TV?",
        answers: [
            "Alexander Fleming",
            "James Watt",
            "Adam Smith",
            "John Logie Baird",
        ],
        correctAnswers: [
            "John Logie Baird",
        ],
        explanation: "John Logie Baird invented the TV.",
        optionExplanations: {
            "Alexander Fleming": "Alexander Fleming is incorrect. The correct answer is John Logie Baird. John Logie Baird invented the TV.",
            "James Watt": "James Watt is incorrect. The correct answer is John Logie Baird. John Logie Baird invented the TV.",
            "Adam Smith": "Adam Smith is incorrect. The correct answer is John Logie Baird. John Logie Baird invented the TV.",
            "John Logie Baird": "John Logie Baird is correct. John Logie Baird invented the TV.",
        }
    },
    {
        question: "Alexander Fleming is famous for discovering:",
        answers: [
            "Vaccination",
            "DNA structure",
            "The steam engine",
            "Penicillin",
        ],
        correctAnswers: [
            "Penicillin",
        ],
        explanation: "Alexander Fleming discovered penicillin.",
        optionExplanations: {
            "Vaccination": "Vaccination is incorrect. The correct answer is Penicillin. Alexander Fleming discovered penicillin.",
            "DNA structure": "DNA structure is incorrect. The correct answer is Penicillin. Alexander Fleming discovered penicillin.",
            "The steam engine": "The steam engine is incorrect. The correct answer is Penicillin. Alexander Fleming discovered penicillin.",
            "Penicillin": "Penicillin is correct. Alexander Fleming discovered penicillin.",
        }
    },
];

const extraQuestions = extraQuestionsRaw;

const quizQuestionsDataBaseRaw = [...initialQuestions, ...extraQuestions];

quizQuestionsDataBaseRaw.forEach((q) => {
    if (!q.explanation) {
        const correctText = q.correctAnswers.join(', ');
        q.explanation = `Correct answer: ${correctText}. Review this to improve your understanding of the topic.`;
    }

    if (!q.optionExplanations) {
        const correctText = q.correctAnswers.join(', ');
        q.optionExplanations = {};
        q.answers.forEach((answerText) => {
            if (q.correctAnswers.includes(answerText)) {
                q.optionExplanations[answerText] = `${answerText} is correct. ${q.explanation}`;
            } else {
                q.optionExplanations[answerText] = `${answerText} is incorrect. The correct answer is ${correctText}. ${q.explanation}`;
            }
        });
    }
});

// Make the data globally available
window.quizQuestionsDataBase = quizQuestionsDataBaseRaw;
