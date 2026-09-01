tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'kufi': ['Noto Kufi Arabic', 'sans-serif'],
                'serif': ['Instrument Serif', 'serif'],
            }
        }
    }
};

// ============ MEALS DATA ============
const meals = [
    {
        id: 1, name: "فول مدمس بالزيت الحار", emoji: "🫘",
        category: "breakfast", categoryLabel: "🌅 فطار", time: "10 دقائق", difficulty: "سهل",
        description: "الفول المدمس اكلة مصرية اصلية، بسيطة وسريعة ومرضية جداً",
        ingredients: ["2 كوب فول مدمس", "2 فص ثوم مهروس", "عصير ليمونة", "زيت زيتون", "ملح وفلفل اسود", "كمون", "طماطم مقطعة", "بقدونس طازج"],
        steps: ["سخن الفول المدمس على النار حتى يغلي", "اهرسه بالشوكة او بالخلاط حسب السماكة اللي عايزها", "حضر التقلية: اخلط الثوم مع عصير الليمون والكمون والملح والفلفل", "ضيف التقلية على الفول وقلّب كويس", "قدمه في طبق وزيّنه بالطماطم المقطعة والبقدونس", "اسكب زيت زيتون على الوجه واستمتع!"]
    },
    {
        id: 2, name: "طعمية (فلافل) مصرية", emoji: "🧆",
        category: "breakfast", categoryLabel: "🌅 فطار", time: "30 دقيقة", difficulty: "متوسط",
        description: "طعمية مقرمشة من بره، ناعمة من جوه.. سر الفطار المصري",
        ingredients: ["2 كوب فول مقشور منقوع", "1 بصلة كبيرة", "3 فصوص ثوم", "بقدونس وكراث", "كزبرة خضراء", "كمون وبهارات", "ملح وفلفل", "بيكربونات صودا", "زيت للقلي"],
        steps: ["صفّي الفول المنقوع جيداً من الماء", "اخلط الفول مع البصل والثوم والبقدونس والكراث والكزبرة في الخلاط", "اضف الكمون والبهارات والملح والفلفل واخلط كويس", "اضف رشة بيكربونات صودا وقلّب", "شكّل الحاجة على شكل اقراص واقليها في زيت غزير حار", "قدمها مع الخبز والطحينة والسلطة"]
    },
    {
        id: 3, name: "اومليت بالجبن والطماطم", emoji: "🍳",
        category: "breakfast", categoryLabel: "🌅 فطار", time: "10 دقائق", difficulty: "سهل",
        description: "فطار سريع وشهي بالمكونات اللي موجودة في اي بيت",
        ingredients: ["3 بيضات", "ربع كوب جبن مبشور", "طماطم مقطعة", "فلفل الوان", "بصل اخضر", "ملح وفلفل اسود", "زبدة"],
        steps: ["اخفق البيض مع الملح والفلفل", "سخن الزبدة في المقلاة على نار متوسطة", "اضف البصل والطماطم والفلفل وقلّب دقيقة", "اسكب البيض فوق الخضار واتركه يتماسك شوية", "رش الجبن على نصف البيضة واطوي النصف التاني", "قدمها فوراً مع خبز محمص"]
    },
    {
        id: 4, name: "كشري", emoji: "🥘",
        category: "lunch", categoryLabel: "☀️ غدا", time: "45 دقيقة", difficulty: "متوسط",
        description: "اكلة الشارع المصري الاشهر.. ارز ومكرونة وعدس وتقلية",
        ingredients: ["1 كوب ارز", "1 كوب مكرونة", "1 كوب عدس بني", "بصلة كبيرة للتقلية", "2 بصلة صغيرة للصلصة", "طماطم مفرومة", "كمون وبهارات", "ثوم", "خل ابيض", "زيت للقلي"],
        steps: ["اسلق العدس في ماء كتير حتى ينضج مع ملح وكمون", "سلق المكرونة وصفيها", "اطبخ الارز العادي بالطريقة المعتادة", "حضر الدقة: اطحن الثوم والخل والكمون والملح مع شوية ماء العدس", "حضر التقلية: قطّع البصلة شرائح واقليها حتى ذهبية", "حضر الصلصة: شوح البصل ثم اضف الطماطم والبهارات", "قدم الكشري: ارز + مكرونة + عدس + دقة + صلصة + تقلية"]
    },
    {
        id: 5, name: "مولوخية بالارز", emoji: "🥬",
        category: "lunch", categoryLabel: "☀️ غدا", time: "30 دقيقة", difficulty: "سهل",
        description: "مولوخية خضراء ناعمة بالمرقة والارز الابيض.. اكلة مصرية كلاسيك",
        ingredients: ["500g مولوخية مفرومة", "4 اكواب مرقة دجاج", "3 فصوص ثوم", "1 ملعقة كبيرة كزبرة جافة", "ملح وفلفل", "ليمون", "ارز ابيض"],
        steps: ["سخن المرقة حتى تغلي", "اضف المولوخية المفرومة وقلّب بسرعة عشان متغلظش", "خليها تغلي 5 دقائق على نار هادية", "في مقلاة صغيرة: شوح الثوم في زيت ثم اضف الكزبرة الجافة", "اسكب خليط الثوم والكزبرة على المولوخية فوراً (صوت الشحومة)", "قلّب واتركها دقيقة ثم ارفعها من على النار", "قدمها مع الارز الابيض والليمون"]
    },
    {
        id: 6, name: "فراخ مشوية بالاعشاب", emoji: "🍗",
        category: "lunch", categoryLabel: "☀️ غدا", time: "60 دقيقة", difficulty: "متوسط",
        description: "فراخ مقرمشة من بره، طرية من جوه.. بتتغدى بكل لذة",
        ingredients: ["1 دجاجة كاملة مقطعة", "3 فصوص ثوم مهروس", "عصير ليمونة", "زيت زيتون", "بهارات مشوية", "كمون وكركم", "بابريكا", "ملح وفلفل اسود", "بقدونس وزعتر طازج"],
        steps: ["اعمل شقوق في الفراخ عشان التتبيلة تدخل", "اخلط الثوم والليمون والزيت وجميع البهارات", "تبّل الفراخ بالتتبيلة كويس واتركها ساعة على الاقل", "سخن الفرن على 200 درجة", "رص الفراخ في صينية وادخلها الفرن 40-45 دقيقة", "قلّبها نص الوقت واعملها من فوق الشواية عشان تتحمر", "قدمها مع سلطة ومحمرة او ارز"]
    },
    {
        id: 7, name: "مكرونة بالبشاميل", emoji: "🍝",
        category: "lunch", categoryLabel: "☀️ غدا", time: "45 دقيقة", difficulty: "متوسط",
        description: "مكرونة بالبشاميل الفرنسي.. وحدة بتكفي وتشبع",
        ingredients: ["500g مكرونة", "2 كوب حليب", "2 ملعقة زبدة", "2 ملعقة دقيق", "جبنة شيدر مبشورة", "جبنة موزاريلا", "ملح وفلفل", "جوزة الطيب"],
        steps: ["اسلق المكرونة نصف استواء وصفيها", "حضر البشاميل: ذوّب الزبدة واضف الدقيق وقلّب دقيقة", "اضف الحليب تدريجياً مع التقليب المستمر عشان متعملش كتل", "اضف الملح والفلفل وجوزة الطيب واستمر بالتقليب حتى يتكثف", "اضف نصف الجبن للبشاميل وقلّب", "اخلط المكرونة مع نصف البشاميل في صينية", "غطّيها بالبشاميل الباقي ورش الجبن وادخلها الفرن 20 دقيقة"]
    },
    {
        id: 8, name: "حمص بالطحينة", emoji: "🫓",
        category: "lunch", categoryLabel: "☀️ غدا", time: "15 دقيقة", difficulty: "سهل",
        description: "حمص كريمي بالطحينة.. يتعمل سريع ويتاكل اسرع",
        ingredients: ["2 كوب حمص مسلوق", "3 ملاعق طحينة", "عصير ليمونة", "2 فص ثوم", "زيت زيتون", "ملح وكمون", "بابريكا للتزيين", "بقدونس"],
        steps: ["ضع الحمص في الخلاط", "اضف الطحينة والثوم وعصير الليمون والملح والكمون", "اخلط جيداً واضف ماء بارد تدريجياً حتى تصل للقوام المطلوب", "قدمه في طبق واعمل حفرة في النص", "اسكب زيت زيتون في الحفرة ورش بابريكا وبقدونس", "قدمه مع خبز عربي طازج"]
    },
    {
        id: 9, name: "شاورما فراخ", emoji: "🌯",
        category: "dinner", categoryLabel: "🌙 عشا", time: "30 دقيقة", difficulty: "متوسط",
        description: "شاورما فراخ في البيت.. مذاقها بيعزق المطاعم",
        ingredients: ["500g صدور فراخ شرائح", "2 ملعقة زبادي", "بهارات شاورما", "ثوم مهروس", "خل تفاح", "زيت زيتون", "فلفل الوان", "بصل", "خبز عربي", "طحينة", "سلطة طحماطم"],
        steps: ["تبّل الفراخ بالزبادي والبهارات والثوم والخل والزيت", "اتركها في الثلاجة ساعة على الاقل", "شوح الفراخ في مقلاة حارة على نار عالية حتى تتحمر", "اضف الفلفل والبصل وقلّب", "سخن الخبز العربي وحط شوية طحينة", "حط الفراخ والسلطة ولفّه", "قدمها ساخنة مع البطاطس والمخللات"]
    },
    {
        id: 10, name: "فتة بالخل والتوم", emoji: "🧄",
        category: "dinner", categoryLabel: "🌙 عشا", time: "30 دقيقة", difficulty: "متوسط",
        description: "فتة مصرية اصلية بالخل والثوم.. اكلة ملكية",
        ingredients: ["خبز بلدي محمص", "1 كوب مرقة لحم او فراخ", "3 فصوص ثوم", "ربع كوب خل ابيض", "ملح وفلفل", "كمون", "سمن بلدي", "لحم مفروم (اختياري)"],
        steps: ["قطّع الخبز لمكعبات صغيرة وحمّصه في الفرن او على النار", "حضر الدقة: اهرس الثوم مع الملح واضف الخل والكمون", "سخن المرقة واضف الدقة عليها وقلّب (متغليش كتير عشان الخل ميطلعش ريحته)", "رص الخبز المحمص في الطبق", "اسكب مرقة الخل والتوم على الخبز", "لو في لحم، حمره وقدمه فوق الفتة", "قدمها فوراً ساخنة"]
    },
    {
        id: 11, name: "سندوتشات كشري من الشارع", emoji: "🥖",
        category: "dinner", categoryLabel: "🌙 عشا", time: "5 دقائق", difficulty: "سهل",
        description: "لما تبقى جعان الليل وتروح تشتري كشري من عربية الشارع",
        ingredients: ["كشري جاهز او من البراد", "خبز فرنسي", "دقة وتقلية جاهزة", "صلصة طماطم", "محمرة (اختياري)"],
        steps: ["سخن الكشري لو بارد (ميكروويف او على النار)", "افتح الخبز الفرنسي من النص", "حط الكشري بحيث يتوزع الارز والمكرونة والعدس", "اسكب دقة كافية", "اضف صلصة طماطم", "رش تقلية كتير من فوق", "اقفل السندوتش وكله بسرعة قبل ما يسيح!"]
    },
    {
        id: 12, name: "ارز بقلب الدجاج", emoji: "🍚",
        category: "dinner", categoryLabel: "🌙 عشا", time: "40 دقيقة", difficulty: "متوسط",
        description: "ارز بمزاكة وقلب دجاج.. عشا مشبع ولذيذ",
        ingredients: ["2 كوب ارز", "2 قلب دجاج", "بصلة مفرومة", "2 فص ثوم", "بهارات مشكلة", "كمون وكركم", "مرقة دجاج", "بقدونس", "زيت"],
        steps: ["قطّع قلب الدجاج قطع صغيرة ونظّفه كويس", "شوح البصل ثم اضف القلب وقلّب حتى يتغير لونه", "اضف الثوم والبهارات والكمون والكركم", "اضف الارز المغسول وقلّب مع القلب دقيقة", "اسكب المرقة (نسبة 1:1.5 ارز:مرقة)", "اتركه يغلي ثم خفّف النار وغطّيه 20 دقيقة", "قلّبه بالشوكة وزيّنه بالبقدونس"]
    },
    {
        id: 13, name: "كشك كريمي بالدجاج", emoji: "🍲",
        category: "dinner", categoryLabel: "🌙 عشا", time: "35 دقيقة", difficulty: "سهل",
        description: "كشك كريمي بالدجاج والمكرونة.. عشا دافي ومشبع",
        ingredients: ["2 كوب مكرونة", "1 كوب مرقة دجاج", "نصف كوب كريمة", "صدور دجاج مسلوقة ومفتتة", "بصلة", "ثوم", "بهارات", "جبنة مبشورة"],
        steps: ["اسلق المكرونة نصف استواء", "شوح البصل والثوم في زبدة", "اضف المرقة والكريمة والبهارات", "اضف المكرونة والدجاج المفتت", "اتركه على نار هادية 10 دقائق حتى يتكثف", "رش جبنة على الوجه وقدمه", "يكفي مع سلطة خضراء"]
    },
    {
        id: 14, name: "فول بالزيت والليمون", emoji: "🫙",
        category: "snack", categoryLabel: "🍿 سناك", time: "5 دقائق", difficulty: "سهل",
        description: "اسرع سناك ممكن.. فول بالزيت والليمون والطماطم",
        ingredients: ["علبة فول مدمس", "زيت زيتون", "ليمون", "طماطم", "بصل اخضر", "ملح وفلفل", "كمون"],
        steps: ["افتح علبة الفول في طبق", "اضف عصير ليمونة", "رش ملح وفلفل وكمون", "قطّع طماطم وبصل اخضر فوقه", "اسكب زيت زيتون كويس على الوجه", "كله مع خبز بلدي واتمتع!"]
    },
    {
        id: 15, name: "بطاطس حارة بالفرن", emoji: "🍟",
        category: "snack", categoryLabel: "🍿 سناك", time: "30 دقيقة", difficulty: "سهل",
        description: "بطاطس مقرمشة بالفرن بتتبيلة حارة.. اسرع من الشيبسي والذ",
        ingredients: ["4 حبات بطاطس كبيرة", "زيت زيتون", "بهارات حارة", "بابريكا مدخنة", "ثوم بودرة", "ملح", "جبنة شيدر (اختياري)"],
        steps: ["قطّع البطاطس لاسياخ سميكة", "انقعها في ماء نصف ساعة عشان تطلع النشا", "جفّفها كويس وتبّلها بجميع البهارات والزيت", "رصها في صينية مفرودة مغطاة بورق زبدة", "ادخلها فرن حار 220 درجة 25-30 دقيقة", "قلّبها نص الوقت عشان تتلون من كل الجهات", "اخرجها ورش عليها جبنة لو حابب"]
    },
    {
        id: 16, name: "سندوتش فلافل من البقالة", emoji: "🥙",
        category: "snack", categoryLabel: "🍿 سناك", time: "5 دقائق", difficulty: "سهل",
        description: "اشتري فلافل جاهزة واعمل سندوتش في دقيقة",
        ingredients: ["فلافل جاهزة", "خبز عربي", "سلطة خضراء", "طحينة", "مخللات", "حارة (اختياري)"],
        steps: ["سخن الفلافل في الفرن او المقلاة", "افتح الخبز العربي", "حط سلطة خضراء في القاعدة", "ضيف الفلافل (4-5 حبات)", "اضف طحينة ومخللات", "لو حابب حارة ضيفها", "لفّ السندوتش وكله وانت ماشي!"]
    },
    {
        id: 17, name: "عيش بالبيض المقلي", emoji: "🍞",
        category: "snack", categoryLabel: "🍿 سناك", time: "5 دقائق", difficulty: "سهل",
        description: "ابسط سناك في الدنيا.. عيش بيض وممكن تضيف جبن او فلفل",
        ingredients: ["عيش بلدي", "بيض", "زبدة او زيت", "ملح وفلفل", "جبنة (اختياري)", "فلفل حار (اختياري)"],
        steps: ["سخن الزبدة في المقلاة", "افرك البيض وقلّبه بسرعة (مش مسلوق)", "اضف الملح والفلفل", "قطّع العيش نصفين", "حط البيض في العيش", "اضف جبن او فلفل لو حابب", "اقفل السندوتش وكله"]
    },
    {
        id: 18, name: "فتة حمص", emoji: "🥣",
        category: "lunch", categoryLabel: "☀️ غدا", time: "20 دقيقة", difficulty: "سهل",
        description: "فتة حمص بالزبدة والصنوبر.. اكلة شامية لذيذة جداً",
        ingredients: ["2 كوب حمص مسلوق", "خبز محمص", "2 ملعقة زبدة", "صنوبر", "ملح وكمون", "مرقة", "لبن زبادي (اختياري)"],
        steps: ["سخن المرقة واضف عليها الحمص", "تبّلها بالملح والكمون واتركها تغلي 5 دقائق", "رص الخبز المحمص في اطباق", "اسكب الحمص بالمرقة على الخبز", "ذوّب الزبدة وشوح فيها الصنوبر حتى يذهب", "اسكب الزبدة والصنوبر على الوجه", "قدمها فوراً"]
    },
    {
        id: 19, name: "محمرة بيض", emoji: "🥚",
        category: "breakfast", categoryLabel: "🌅 فطار", time: "15 دقيقة", difficulty: "سهل",
        description: "محمرة بيض بالبصل والطماطم.. فطار ريفي مصري اصيل",
        ingredients: ["4 بيضات", "2 بصلة كبيرة مقطعة شرائح", "طماطم مقطعة", "فلفل اخضر", "ثوم", "بهارات مشكلة", "زيت", "ملح وفلفل"],
        steps: ["سخن الزيت وشوح البصلة حتى تذهب ذهبي", "اضف الثوم والفلفل الاخضر وقلّب", "اضف الطماطم والبهارات والملح", "غطّي المقلاة واتركها 10 دقائق على نار هادية", "افتح حفر في المحمرة وكسّر البيض فيها", "غطّيها تاني حتى ينضج البيض", "قدمها مع خبز بلدي طازج"]
    },
    {
        id: 20, name: "شاي بالحليب وبسكويت", emoji: "☕",
        category: "snack", categoryLabel: "🍿 سناك", time: "10 دقيقة", difficulty: "سهل",
        description: "شاي مصري بالحليب مع بسكويت.. سناك البيت المصري",
        ingredients: ["ماء", "شاي احمر", "حليب", "سكر", "بسكويت (اي نوع)"],
        steps: ["سخن الماء في الابريق", "اضف الشاي واتركه يغلي 3 دقائق", "اضف الحليب والسكر حسب الذوق", "اتركه يغلي تاني شوية", "صبّه في اكواب", "قدمه مع البسكويت", "غمس البسكويت في الشاي واتمتع بلحظة هدوء!"]
    }
];

// ============ STATE ============
let favorites = JSON.parse(localStorage.getItem('meal-favs') || '[]');
let currentFilter = 'all';
let currentRandomId = null;

// ============ SCROLL FUNCTION ============
function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    renderMeals('all');
    updateFavCount();
});

// ============ GLOBAL BUTTON HANDLERS ============
document.addEventListener('click', function(event) {
    const scrollTarget = event.target.closest('[data-scroll-to]');
    if (scrollTarget) {
        const sectionId = scrollTarget.getAttribute('data-scroll-to');
        scrollTo(sectionId);
        return;
    }

    const actionButton = event.target.closest('[data-action]');
    if (!actionButton) return;

    const action = actionButton.getAttribute('data-action');

    if (action === 'favorites') {
        openFavorites();
        return;
    }

    if (action === 'random-meal') {
        randomMeal();
        return;
    }

    if (action === 'random-hero') {
        scrollTo('random');
        setTimeout(randomMeal, 200);
        return;
    }

    if (action === 'filter-meals') {
        const category = actionButton.getAttribute('data-category');
        filterMeals(category);
        return;
    }
});

// ============ RENDER MEALS ============
function renderMeals(category) {
    var grid = document.getElementById('meals-grid');
    var empty = document.getElementById('empty-state');
    var filtered = category === 'all' ? meals : meals.filter(function(m) { return m.category === category; });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        empty.classList.remove('hidden');
        return;
    }

    empty.classList.add('hidden');
    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var meal = filtered[i];
        var isFav = favorites.indexOf(meal.id) > -1;
        html += '<div class="meal-card card-hover rounded-xl border border-white/5 card-border overflow-hidden" style="animation-delay:' + (i * 0.08) + 's">';
        html += '<div class="p-6">';
        html += '<div class="flex items-start justify-between mb-4">';
        html += '<div class="text-4xl">' + meal.emoji + '</div>';
        html += '<div class="flex items-center gap-2">';
        html += '<span class="text-xs text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">' + meal.difficulty + '</span>';
        html += '<button onclick="toggleFavorite(' + meal.id + ')" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">';
        html += '<i data-lucide="heart" class="w-4 h-4 ' + (isFav ? 'text-red-400 fill-red-400' : 'text-zinc-600') + '"></i>';
        html += '</button></div></div>';
        html += '<h3 class="text-lg font-medium mb-1">' + meal.name + '</h3>';
        html += '<p class="text-sm text-zinc-500 mb-3">' + meal.description + '</p>';
        html += '<div class="flex items-center gap-4 mb-4">';
        html += '<span class="text-xs text-zinc-400 flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i>' + meal.time + '</span>';
        html += '<span class="text-xs text-zinc-400">' + meal.categoryLabel + '</span>';
        html += '</div>';
        html += '<button onclick="toggleRecipe(' + meal.id + ')" class="w-full py-2.5 rounded-lg border border-white/10 text-sm text-zinc-300 hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer recipe-toggle-btn" data-meal-id="' + meal.id + '">';
        html += '<i data-lucide="chef-hat" class="w-4 h-4"></i><span>شوف الوصفة</span>';
        html += '<i data-lucide="chevron-down" class="w-3 h-3 transition-transform duration-300 recipe-chevron" data-meal-id="' + meal.id + '"></i>';
        html += '</button>';

        html += '<div class="recipe-content" id="recipe-' + meal.id + '">';
        html += '<div class="pt-4 border-t border-white/5 mt-4">';
        html += '<div class="mb-4">';
        html += '<h4 class="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2"><i data-lucide="list" class="w-4 h-4"></i>المكونات</h4>';
        html += '<div class="flex flex-wrap gap-2">';
        for (var j = 0; j < meal.ingredients.length; j++) {
            html += '<span class="tag-ingredient text-xs px-3 py-1.5 rounded-full text-zinc-300">' + meal.ingredients[j] + '</span>';
        }
        html += '</div></div>';
        html += '<div>';
        html += '<h4 class="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2"><i data-lucide="flame" class="w-4 h-4"></i>طريقة التحضير</h4>';
        html += '<div class="space-y-3">';
        for (var k = 0; k < meal.steps.length; k++) {
            html += '<div class="flex gap-3">';
            html += '<div class="step-number rounded-full flex items-center justify-center text-xs font-medium text-white shrink-0">' + (k + 1) + '</div>';
            html += '<p class="text-sm text-zinc-400 leading-relaxed pt-1">' + meal.steps[k] + '</p>';
            html += '</div>';
        }
        html += '</div></div></div></div>';
        html += '</div></div>';
    }

    grid.innerHTML = html;
    lucide.createIcons();
}

// ============ TOGGLE RECIPE ============
function toggleRecipe(mealId) {
    var content = document.getElementById('recipe-' + mealId);
    var chevron = document.querySelector('.recipe-chevron[data-meal-id="' + mealId + '"]');

    var allOpen = document.querySelectorAll('.recipe-content.open');
    for (var i = 0; i < allOpen.length; i++) {
        allOpen[i].classList.remove('open');
    }
    var allChevrons = document.querySelectorAll('.recipe-chevron');
    for (var j = 0; j < allChevrons.length; j++) {
        allChevrons[j].style.transform = 'rotate(0deg)';
    }

    if (content && !content.classList.contains('open')) {
        content.classList.add('open');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
    }
}

// ============ FILTER ============
function filterMeals(category) {
    currentFilter = category;
    var btns = document.querySelectorAll('.category-btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
        btns[i].classList.add('text-zinc-400');
    }
    var activeBtn = document.querySelector('.category-btn[data-cat="' + category + '"]');
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.classList.remove('text-zinc-400');
    }
    renderMeals(category);
}

// ============ RANDOM MEAL ============
function randomMeal() {
    var btn = document.getElementById('random-btn');
    var diceIcon = document.getElementById('dice-icon');
    diceIcon.classList.add('dice-spin');
    btn.disabled = true;
    btn.style.opacity = '0.6';
    btn.innerHTML = '<span class="inline-block animate-spin">⏳</span> بفكر...';

    setTimeout(function() {
        var randomIndex = Math.floor(Math.random() * meals.length);
        var meal = meals[randomIndex];
        currentRandomId = meal.id;

        document.getElementById('random-emoji').textContent = meal.emoji;
        document.getElementById('random-name').textContent = meal.name;
        document.getElementById('random-category').textContent = meal.categoryLabel;
        document.getElementById('random-time').textContent = meal.time + ' • ' + meal.difficulty;

        var result = document.getElementById('random-result');
        result.classList.remove('hidden');
        var inner = result.querySelector('div');
        inner.classList.remove('animate-scale-in');
        void inner.offsetWidth;
        inner.classList.add('animate-scale-in');

        diceIcon.classList.remove('dice-spin');
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.innerHTML = '🪄 يا تره ايه هيا؟';
    }, 900);
}

function showRecipeById() {
    if (currentRandomId) openModal(currentRandomId);
}

// ============ MODAL ============
function openModal(mealId) {
    var meal = null;
    for (var i = 0; i < meals.length; i++) {
        if (meals[i].id === mealId) { meal = meals[i]; break; }
    }
    if (!meal) return;

    document.getElementById('modal-name').textContent = meal.name;
    document.getElementById('modal-category-time').textContent = meal.categoryLabel + ' • ' + meal.time + ' • ' + meal.difficulty;

    var isFav = favorites.indexOf(meal.id) > -1;
    var html = '';
    html += '<div class="text-center mb-6"><div class="text-6xl mb-3">' + meal.emoji + '</div>';
    html += '<p class="text-zinc-400 font-light">' + meal.description + '</p></div>';
    html += '<div class="mb-6"><h4 class="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2"><i data-lucide="list" class="w-4 h-4"></i>المكونات</h4>';
    html += '<div class="flex flex-wrap gap-2">';
    for (var j = 0; j < meal.ingredients.length; j++) {
        html += '<span class="tag-ingredient text-xs px-3 py-1.5 rounded-full text-zinc-300">' + meal.ingredients[j] + '</span>';
    }
    html += '</div></div>';
    html += '<div class="mb-6"><h4 class="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2"><i data-lucide="flame" class="w-4 h-4"></i>طريقة التحضير</h4>';
    html += '<div class="space-y-3">';
    for (var k = 0; k < meal.steps.length; k++) {
        html += '<div class="flex gap-3"><div class="step-number rounded-full flex items-center justify-center text-xs font-medium text-white shrink-0">' + (k + 1) + '</div>';
        html += '<p class="text-sm text-zinc-400 leading-relaxed pt-1">' + meal.steps[k] + '</p></div>';
    }
    html += '</div></div>';
    html += '<div class="flex items-center gap-3 pt-4 border-t border-white/5">';
    html += '<button onclick="toggleFavorite(' + meal.id + '); openModal(' + meal.id + ');" class="flex-1 py-2.5 rounded-lg border border-white/10 text-sm text-zinc-300 hover:bg-white/5 transition-colors flex items-center justify-center gap-2 cursor-pointer">';
    html += '<i data-lucide="heart" class="w-4 h-4 ' + (isFav ? 'text-red-400 fill-red-400' : '') + '"></i>';
    html += (isFav ? 'محفوظ في المفضلة' : 'احفظ في المفضلة') + '</button>';
    html += '<button onclick="closeModal()" class="flex-1 btn-emerald py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2">✓ تمام</button>';
    html += '</div>';

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('recipe-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('recipe-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

// ============ FAVORITES ============
function toggleFavorite(mealId) {
    var index = favorites.indexOf(mealId);
    var mealName = '';
    for (var i = 0; i < meals.length; i++) {
        if (meals[i].id === mealId) { mealName = meals[i].name; break; }
    }

    if (index > -1) {
        favorites.splice(index, 1);
        showToast('تم ازالته من المفضلة', '💔');
    } else {
        favorites.push(mealId);
        showToast('تم حفظ "' + mealName + '" في المفضلة', '❤️');
    }
    localStorage.setItem('meal-favs', JSON.stringify(favorites));
    updateFavCount();
    renderMeals(currentFilter);
}

function updateFavCount() {
    document.getElementById('fav-count').textContent = favorites.length;
}

function openFavorites() {
    var body = document.getElementById('fav-body');
    if (favorites.length === 0) {
        body.innerHTML = '<div class="text-center py-10"><div class="text-5xl mb-4">💔</div><p class="text-zinc-400 mb-1">مفيش حاجة في المفضلة</p><p class="text-zinc-600 text-sm">اضغط على ❤️ عشان تحفظ وجباتك المفضلة</p></div>';
    } else {
        var html = '<div class="space-y-3">';
        for (var i = 0; i < favorites.length; i++) {
            var meal = null;
            for (var j = 0; j < meals.length; j++) {
                if (meals[j].id === favorites[i]) { meal = meals[j]; break; }
            }
            if (!meal) continue;
            html += '<div class="flex items-center gap-3 p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">';
            html += '<div class="text-2xl">' + meal.emoji + '</div>';
            html += '<div class="flex-1"><div class="text-sm font-medium">' + meal.name + '</div>';
            html += '<div class="text-xs text-zinc-500">' + meal.categoryLabel + ' • ' + meal.time + '</div></div>';
            html += '<button onclick="openModal(' + meal.id + '); closeFavorites();" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">📖</button>';
            html += '<button onclick="toggleFavorite(' + meal.id + '); openFavorites();" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-zinc-500 hover:text-white">✕</button>';
            html += '</div>';
        }
        html += '</div>';
        body.innerHTML = html;
    }
    document.getElementById('fav-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeFavorites() {
    document.getElementById('fav-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

// ============ TOAST ============
function showToast(message, emoji) {
    var container = document.getElementById('toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast glass-panel rounded-lg px-4 py-3 flex items-center gap-3 text-sm max-w-xs';
    toast.innerHTML = '<span class="text-lg">' + emoji + '</span><span>' + message + '</span>';
    container.appendChild(toast);
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(function() { toast.remove(); }, 300);
    }, 2500);
}

// ============ KEYBOARD ============
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeFavorites();
    }
});
