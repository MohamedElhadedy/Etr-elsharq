// ==========================================
// 1. عداد العد التنازلي (Countdown Timer)
// ==========================================
let countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    if (document.querySelector(".days")) document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    if (document.querySelector(".hours")) document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    if (document.querySelector(".minutes")) document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    if (document.querySelector(".seconds")) document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

// ==========================================
// 2. تحريك أشرطة المهارات (Skills Progress)
// ==========================================
let progressSpans = document.querySelectorAll(".the-progress span");
let skillsSection = document.querySelector(".our-skills");

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressSpans.forEach((span) => {
                span.style.width = span.dataset.width;
            });
        } else {
            progressSpans.forEach((span) => {
                span.style.width = "0";
            });
        }
    });
}, { threshold: 0.2 });

if (skillsSection) skillsObserver.observe(skillsSection);

// ==========================================
// 3. أنميشن ضم العناوين (Main Title Observer)
// ==========================================
// الكود ده بيخلي النقطتين يضموا على بعض أول ما توصل للعنوان
const mainTitles = document.querySelectorAll(".main-title");
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.5 });

mainTitles.forEach(title => titleObserver.observe(title));

// ==========================================
// 4. عداد الأرقام الإحصائية (Stats Increase)
// ==========================================
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", function () {
    // تشغيل عداد الأرقام عند الوصول لقسم الإحصائيات
    if (statsSection && window.scrollY >= statsSection.offsetTop - 300) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
});

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}



// بدايه غلاف الفيديو 
/* تأثير الآلة الكاتبة لموقع عطر الشرق */

const titleText = "مرحبا بكم فى عطر الشـرق";
const descText = '"عطر الشرق.. نفحات تأخذك في رحلة عبر الزمن، لتبقى ذكراك خالدة في كل مكان. بصمة عطرية تتحدث عنك قبل أن تتكلم، وتترك أثراً لا يمحوه الغياب."';

function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);

    // تأكد إن العنصر موجود في الصفحة قبل ما تبدأ
    if (element) {
        element.innerHTML = ""; // تصفير المحتوى قبل البدء
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }
}

// تشغيل الكود بمجرد تحميل الصفحة
window.addEventListener("load", () => {
    // سرعة كتابة العنوان 100 ملي ثانية
    typeWriter(titleText, "typewriter-h1", 100, () => {
        // سرعة كتابة الوصف 50 ملي ثانية (أسرع شوية عشان طويل)
        typeWriter(descText, "typewriter-p", 50);
    });
});

// نهايه الغلاف 

// ============================================================
// 1. مصفوفة العطور الشاملة (290 عطر)
// ============================================================
// ============================================================
// المخزن الشامل والنهائي لكافة أنواع عطور "عطر الشرق" 🌙
// ============================================================
window.allPerfumes = [
    // --- مجموعة عطور شرقية فاخرة (بدون همزات) ---
    "360 (العربية للعود)", "اجار وود", "ارمانى بلاك وود", "استرونجر عود", "العربية للعود", "العود الاحمر", "العود الخليجي", "القمر الازرق", "الحجر الاسود", "السويداء", "المدينة المنورة", "بلاك افغانو", "بلاك عود", "تراب الذهب", "توباكو عود", "توم فورد عود", "جوتشي عود", "جولدن عود", "حراء", "خلطه القرشي", "دعاء الجنة", "رسالة (العربية للعود)", "زهرة الخليج", "سلطان العطور", "شهرة", "شيخ الشباب", "عروق العود", "عطر الجمعة", "عطر الشرق", "عنبر ملوكى", "عود ابيض", "عود اصفهانى", "عود افغانو", "عود بخور الذهب", "عود بوكية", "عود الجبل الاسود", "عود الخشب", "عود دارك", "عود راكان", "عود روز", "عود سافرون", "عود سعود", "عود السلطان", "عود عمانى", "عود فورجريتنس", "عود كابوس", "عود كشخه", "عود كمبودى", "عود ليالى الشموع", "عود مبخر", "عود مود", "غبار الذهب", "فواكه سعودى", "ماء الذهب", "مخلط الحجاز", "مخلط الشفاء", "مخلط الفجر", "مخلط عطر الشرق", "مسك ابيض", "مسك ابيض متسلق", "مسك الذهب", "مسك الصحراء", "مسك الكعبة", "مسك انجليزى", "مسك روز", "مسك شيخه", "مسك عربى", "مسك كارميل", "ناكسوس زرجوف", "نسائم الاقصي", "وصال",

    // --- مجموعة عطور رجالى (بدون همزات) ---
    "212 Sexy", "212 vip", "3G", "C.H", "C.k", "X.L", "اربابورا", "ارطغرل", "ارمانى", "ازارو تويز", "ازارو ونتيد", "اسبلندد", "اسد", "استرونجر انتنسلى", "استرلى برفيوم", "اسكيب", "اسكلبشر", "اسمياكى", "اسنشيال سبورت", "اكسبلوجن وودى", "اكوا دي ارمانى", "اكوا دي جو", "اكوا ديجو برفومو", "اكزريوس روج", "اكسيندو (سيسبيرو)", "الكسندريا من زرجوف", "الترا ميل", "الوسام", "اماريج", "امريكانا سبورت", "انا والشوق", "انتينس كافية", "انجل", "انجلز ذا شير", "انفكتوس", "انفكتوس ليجاند", "انكريدابول مى", "اوبن", "اوراج", "اوزاج", "اونلى ذا برايف", "ايكون جولد", "ايكون دنهل", "باد بوى", "باروندا", "باور", "باتشون توت", "باى جفينشى", "برادا", "برسيف", "براوندا", "بلاك اكس اس", "بلاك افغانو", "بلاك اوركيد", "بلاك فورس", "بلاك هوم", "بلاك ليجزس", "بلاك مان", "بلو جينز", "بلو سبورت", "بلو شانيل", "بوص انموشن", "بوص بوتيلا", "بوص ذا سنت", "بوص وايت", "بوما سبورت", "بوما جام", "بومب شيل", "بيانكو لاتيه", "بيور اكس اس", "بى ام دبليو B.M.W", "تومى فريدوم", "تومى هيل", "توى بوى", "جاجوار بلاك", "جاجوار جرين", "جاكومو", "جان بول", "جنتل مان", "جوب", "جوب جامب", "جوتشي جيلتى", "جورج قرداحى", "جولد", "جيمى شو", "جرين كاستيل", "حكايات (الف ليلة وليلة)", "دراكار", "درهم", "دبل سيجار", "دربى جوى", "دنهل", "دنهل برسويت", "دنهل ديزاير", "دنهل فريش", "دنهل لندن", "ديفيد بيكهام", "ديزاير بلو", "ديزل بلاك", "ديجافو", "ديور هوم", "دولار", "دارك مونتال", "ذا وان", "ذيس اذ هير", "رد جينز", "روشاز", "روبيرتو كافلى", "ريد توباكو", "زارا بلاك", "زارا موف", "سبريت ليجاند", "سكاندل رجالى", "سلفر بلاك", "سلفر بلو", "سلفر سنت", "سلفر شادو", "سوفاج", "سوفاج الكسير", "سيكسى سول", "سيجار", "سفارى", "شاليز", "شامبيون دافى دوف", "شانيل بلاتنيوم", "شبسيدو ذن مان", "شروتى", "شغف", "شوكولاته بلاك", "شوكولاته وايت", "فانتوم", "فرزاتشي ايروس", "فرزاتشي بلاك", "فرى سكس ناو", "فهرنهايت", "فنتكراتش", "فوديكا", "فوياج", "فولد كالت", "فلانتينو بورن ان روما", "فياجرا", "قهوة", "كاريزما", "كروم ازارو", "كروم ليجاند", "كريد ايفنتوس", "كريد بلاك", "كريد سلفر", "كوكو شانيل بلاك", "كول وتر بلو", "كول وتر مان", "كوستا ازارو", "كى", "كيركي", "لابيدوس", "لاكوست اسنشيال", "لاكوست جرين", "لاكوست وايت", "لاكوست يلو", "لوست شيرى", "لومال ان بورن", "لومال الكسير", "ليبرا", "ماربرت مان", "مالديف", "مرسيدس", "مضاوى", "مليون لاكى", "مون بلو ليجاند", "ميجا مار", "ناكسوس من زرجوف", "نيشان", "نينا ريتش", "نيو بوص", "نيو سبايس بوم اكسترينم", "نيو سلفر", "هاج سنت", "هامر", "هريرا 212", "هريرا اولد", "هريرا برلمنتى", "هيروس 212", "هيفن (درعة)", "هوجو اكس واى", "هوجو انيرجى", "هوجو بلاك", "هوجو بوص 51", "هوجو بوص سنت", "هوجو ريد", "واى (سان لوران)", "وايت انتينس", "وايت سلفر", "وايت ليجزس", "وان مان شو", "وان مليون", "وان مليون برايف", "وان مليون الكسير",

    // --- مجموعة عطور حريمي راقية (بدون همزات) ---
    "212 sexy", "212 vip women", "P.t", "Si", "Si armany", "ارامس", "ازارو جيرل", "اسكادا تاج", "اسكادا جرافيك", "اسكادا شيرى", "اسكادا كوليكشن", "اسكادا ماجناتزيوم", "اسكادا سبشيال", "اسنشوال", "اكلير لطافه", "الف ليلة وليلة", "امواج", "انجل فيكتوريا", "اوشن لونج", "اورجانزا", "اونلى ذا برايف", "اوليمبيا", "ايموشن", "ايفوريا جولد", "ايفوريا سى كى", "ايلى صعب", "ايلى صعب بلاك", "باد جيرل", "باربريز", "باربري لندن", "باربراى", "باريس هيلتون", "بكرات روج", "بريتني سبيرز", "بستاشيو", "بوي جيرل", "بون بون", "بيبى دول", "بيوتى ومان", "بيور بيوتى", "بينك روز", "بينك شوجر", "بلاك اوبميوم", "بلو ليدى", "تاتش لاكوست", "تندر", "تندر روز", "توباكو فانيليا", "توسكا", "تريدى هيرميس", "جادور", "جود جيرل", "جومانا", "جوتشي بلوم", "جوتشي جوتشي", "جوتشي رش", "دولسي جبانا", "راش اسطنبول", "راش فيكتوريا", "رساله", "رغبة", "رويال", "رومانزا", "رومانس", "رومبا", "روميو وجوليت", "روز ذا وان", "روز فانيليا", "ريتشي ريتشي", "زهور الخليج", "سباركل نايت", "سويت ايس", "سو سكاندل", "سو سيكسي", "سيكسي دي جي 5", "سيكسي روج", "سيكسي لوف", "سيكسي ليتل", "سيكسي نايت", "سكاندل", "شاليز", "شمس الامارات", "شوكولاته", "فاراواي", "فانيليا", "فانيليا روبي", "فانتاستيك", "فرست هاواي", "فلاور جوتشي", "فلفت تاتش", "فيكتوريا انجل", "فيكتوريا سيكريت", "فيكتوريا سيكرت شارم", "قصة حب", "كاتي بيري", "كابوتين بنادورا", "كارتير باشا", "كاسيليا", "كان كان", "كشمير", "كنزو", "كنزو فلاور", "كوبرا", "كوكو شانيل", "كوكو نات", "كريزي لوف", "كريزى ميكس", "لاف ان باريس", "لاف از هيفينلي", "لافلى", "لافى اى بيل", "لافى بيل روز", "لابيل جان بول", "لايف لاكوست", "لوي فيتون", "لوليتا لومبيكا", "ليدى مليون", "ليالى الحلمية", "ليلة العمر", "ماركيز", "مانسيرا rose vanilla", "ماى سكاى", "ماى واى", "لمسة", "ميس ديور بيوتي", "ميس شيرى", "مادونا", "ميد نايت", "مون سباركل", "مونتانا", "نرسيكو", "نيشاني", "هوت كوتيور", "هوجو ومان", "ويك اند", "يارا",

    // --- مجموعة عالم المسك والزهور الطبيعية (بدون همزات) ---
    "البنفسج", "الورد الطائفى", "الياسمين", "جادور", "جوتشي بلوم", "زهرة الاوركيد", "زهرة اللافندر", "زهور الريف", "فل", "كنزو فلاور", "لوتس", "مسك الورد", "مسك الجسم", "مسك الطهاره", "مسك بودر", "مسك بودر لافندر ياسمين", "مسك بودر فانيليا لافندر", "مسك بطيخ", "مسك توت", "مسك رومان", "مسك شوكولاتة", "مسك فانيليا", "مسك فانيليا لافندر", "مسك كوكتيل", "مسك لافندر", "مسك لافندر ياسمين", "مسك هاتون", "ميس ديور", "نرسيسو فلاور", "ورد بلدى", "ورد تركى"
];

// ============================================================
// 2. بوب آب أقسام العطور - وظائف المودال وعرض الأنواع
// ============================================================
let currentPerfumes = [];

function openModal(title, namesString) {
    const modalTitle = document.getElementById('modalTitle');
    const modal = document.getElementById('perfumeModal');
    if (modalTitle) modalTitle.innerText = title;
    currentPerfumes = namesString.split('،').map(item => item.trim());
    const searchInput = document.getElementById('perfumeSearch');
    if (searchInput) searchInput.value = "";
    displayPerfumes(currentPerfumes);
    if (modal) modal.style.display = "block";
    const modalBody = document.querySelector('.modal-body');
    if (modalBody) { modalBody.scrollTop = 0; }
}

function displayPerfumes(list) {
    const container = document.getElementById('perfumeListContainer');
    if (!container) return;
    if (list.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align:center; color:gray; padding:20px;'>لا يوجد نتائج مطابقة للبحث</p>";
        return;
    }
    container.innerHTML = list.map(name => `<span class="perfume-item">${name}</span>`).join('');
}

function filterPerfumes() {
    const query = document.getElementById('perfumeSearch').value.toLowerCase();
    const filtered = currentPerfumes.filter(name => name.toLowerCase().includes(query));
    displayPerfumes(filtered);
}

// ============================================================
// 1. تعريف قائمة العطور (منع الأرور وتفعيل الاقتراحات)
// ============================================================
if (typeof allPerfumes === 'undefined') {
    window.allPerfumes = [
        "ورد طائفي", "عطر الفخامة", "مسك الشرق", "عود ملكي",
        "بصمة عطر", "صندل شرقي", "عنبر وجلود", "ليالي الشرق"
    ];
}

// ============================================================
// 2. نظام الاقتراحات أثناء الكتابة (Search Suggestions)
// ============================================================
document.addEventListener('input', function (e) {
    if (e.target.classList.contains('perfume-input')) {
        const input = e.target;
        const container = input.parentElement.querySelector('.suggestions-container');
        const query = input.value.toLowerCase().trim();

        if (query.length < 1) {
            if (container) container.style.display = 'none';
            return;
        }

        const matches = allPerfumes
            .filter(p => p.toLowerCase().includes(query))
            .sort()
            .slice(0, 10);

        if (container) {
            if (matches.length > 0) {
                container.innerHTML = matches.map(m => `<div class="suggestion-item" style="padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;">${m}</div>`).join('');
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        }
    }
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('suggestion-item')) {
        const input = e.target.parentElement.parentElement.querySelector('.perfume-input');
        input.value = e.target.innerText;
        e.target.parentElement.style.display = 'none';
    } else {
        document.querySelectorAll('.suggestions-container').forEach(c => c.style.display = 'none');
    }
});

// ============================================================
// 3. وظيفة إضافة عطر آخر (دي اللي كانت ناقصة وموقفة الزرار)
// ============================================================
function addAnotherPerfume() {
    const container = document.getElementById('perfumeItems');
    if (!container) return;

    const newItem = document.createElement('div');
    newItem.className = 'perfume-item';
    newItem.style.cssText = "border-bottom: 1px dashed #ccc; padding-bottom: 10px; margin-bottom: 10px; margin-top: 10px; position: relative;";

    newItem.innerHTML = `
        <input class="input perfume-input" type="text" placeholder="إسم العطر" name="perfume_name[]" autocomplete="off" required />
        <div class="suggestions-container" style="position: absolute; background: white; z-index: 1000; width: 100%; border: 1px solid #ddd; display:none;"></div>
        <select class="input" name="size[]" required style="cursor: pointer; margin-top: 5px;">
            <option value="" disabled selected>إختر حجم العطر</option>
            <option value="بلية صغيرة">بلية صغيرة</option>
            <option value="بلية وسط">بلية وسط</option>
            <option value="بلية كبيرة">بلية كبيرة</option>
            <option value="20 مللى">20 مللى</option>
            <option value="30 مللى">30 مللى</option>
            <option value="50 مللى">50 مللى</option>
            <option value="100 مللى">100 مللى</option>
        </select>
        <button type="button" onclick="this.parentElement.remove()" style="color: red; border: none; background: none; cursor: pointer; font-size: 13px; display: block; margin-top: 5px;"> حذف الصنف × </button>
    `;
    container.appendChild(newItem);
}

// ============================================================
// 4. بوب آب عمل طلب شراء وإرسال البيانات
// ============================================================
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.onsubmit = function (e) {
        e.preventDefault();

        const submitBtn = orderForm.querySelector('input[type="submit"]');
        const originalValue = submitBtn.value;

        submitBtn.value = "جاري إرسال طلبك...";
        submitBtn.disabled = true;

        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: { 'Accept': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    const successModal = document.getElementById("successModal");
                    if (successModal) successModal.style.display = "flex";
                    this.reset();
                    const items = document.getElementById('perfumeItems');
                    if (items) {
                        while (items.children.length > 1) {
                            items.removeChild(items.lastChild);
                        }
                    }
                } else {
                    alert("حدث خطأ، حاول مرة أخرى.");
                }
            })
            .catch(() => alert("تأكد من اتصالك بالإنترنت."))
            .finally(() => {
                submitBtn.value = originalValue;
                submitBtn.disabled = false;
            });
    };
}
// ============================================================
// 5. وظائف عامة وقفل المودالات
// ============================================================
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

function closeSuccessModal() {
    const modal = document.getElementById("successModal");
    if (modal) modal.style.display = "none";
}

window.onclick = function (event) {
    const perfumeModal = document.getElementById('perfumeModal');
    const offerModal = document.getElementById('offerModal');
    const successModal = document.getElementById('successModal');
    const featureModal = document.getElementById('featureModal');
    if (event.target == perfumeModal) perfumeModal.style.display = "none";
    if (event.target == offerModal) offerModal.style.display = "none";
    if (event.target == successModal) successModal.style.display = "none";
    if (event.target == featureModal) featureModal.style.display = "none";
}

function openFeatureModal(title, description) {
    document.getElementById("featureTitle").innerText = title;
    document.getElementById("featureDescription").innerText = description;
    document.getElementById("featureModal").style.display = "block";
}


// بوباب العرض وعمل شراء عرض
// ============================================================
// كود العروض الخاصة لموقع عطر الشرق 🌙
// 1. وظيفة فتح المودال وتوليد الخانات (1 أو 2 أو 3)
// ==========================================
// محرك عروض عطر الشرق - النسخة المعتمدة
// ==========================================

// 1. فتح المودال وتوليد الخانات
function openOfferModal(offerName, count) {
    const modal = document.getElementById('offerModal');
    const input = document.getElementById('offerNameInput');
    const container = document.getElementById('dynamicPerfumes');

    if (modal && input && container) {
        input.value = offerName;
        container.innerHTML = '';

        for (let i = 1; i <= count; i++) {
            container.innerHTML += `
                <div style="position:relative; margin-bottom:15px;">
                    <input type="text" name="برفان_${i}" placeholder="إختر العطر رقم ${i}" 
                           class="form-input p-search" autocomplete="off" required>
                    <div class="suggestion-box" style="display:none;"></div>
                </div>`;
        }
        modal.style.display = 'flex';
    }
}

// 2. إغلاق المودال
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// 1. فتح المودال وتوليد الخانات
function openOfferModal(offerName, count) {
    const modal = document.getElementById('offerModal');
    const input = document.getElementById('offerNameInput');
    const container = document.getElementById('dynamicPerfumes');

    if (modal && input && container) {
        input.value = offerName;
        container.innerHTML = '';

        for (let i = 1; i <= count; i++) {
            container.innerHTML += `
                <div style="position:relative; margin-bottom:15px;">
                    <input type="text" name="برفان_${i}" placeholder="إختر العطر رقم ${i}" 
                           class="form-input p-search" autocomplete="off" required>
                    <div class="suggestion-box" style="display:none;"></div>
                </div>`;
        }
        modal.style.display = 'flex';
    }
}

// 2. إغلاق المودال
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// 3. البحث الذكي (Suggestions) - الكود بتاعك زي ما هو
document.addEventListener('input', function (e) {
    if (e.target.classList.contains('p-search')) {
        const val = e.target.value.toLowerCase().trim();
        const box = e.target.nextElementSibling;

        if (val.length < 1) {
            box.style.display = 'none';
            return;
        }

        // بيعتمد على وجود window.allPerfumes في ملف الداتا بتاعك
        const matches = window.allPerfumes.filter(p => p.toLowerCase().includes(val)).slice(0, 8);

        if (matches.length > 0) {
            box.innerHTML = matches.map(m => `<div class="suggest-item">${m}</div>`).join('');
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    }
});

// 4. اختيار العطر من القائمة (الكود بتاعك زي ما هو)
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('suggest-item')) {
        e.target.parentElement.previousElementSibling.value = e.target.innerText;
        e.target.parentElement.style.display = 'none';
    } else {
        document.querySelectorAll('.suggestion-box').forEach(b => b.style.display = 'none');
    }
});

// 5. محرك الإرسال (الجزء اللي بيخلي الميل يوصل)
document.addEventListener('DOMContentLoaded', function () {
    const offerForm = document.getElementById('offerForm');
    if (offerForm) {
        offerForm.onsubmit = function (e) {
            e.preventDefault();
            const btn = document.getElementById('offerSubmitBtn');
            const originalText = btn.innerText;
            btn.disabled = true;
            btn.innerText = "جاري الإرسال...";

            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            })
                .then(response => {
                    if (response.ok) {
                        closeModal('offerModal');
                        const successModal = document.getElementById('successModal');
                        if (successModal) successModal.style.display = 'flex';
                        this.reset();
                    } else {
                        alert("حدث خطأ في الإرسال، حاول مرة أخرى.");
                    }
                })
                .catch(() => alert("تأكد من اتصالك بالإنترنت."))
                .finally(() => {
                    btn.disabled = false;
                    btn.innerText = originalText;
                });
        };
    }
});

// 5. محرك الإرسال (Fetch)
document.addEventListener('DOMContentLoaded', function () {
    const offerForm = document.getElementById('offerForm');
    if (offerForm) {
        offerForm.onsubmit = function (e) {
            e.preventDefault();
            const btn = document.getElementById('offerSubmitBtn');
            const originalText = btn.innerText;
            btn.disabled = true;
            btn.innerText = "جاري الإرسال...";

            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            })
                .then(response => {
                    if (response.ok) {
                        closeModal('offerModal');
                        const successModal = document.getElementById('successModal');
                        if (successModal) successModal.style.display = 'flex';
                        this.reset();
                    } else {
                        alert("حدث خطأ في الإرسال، حاول مرة أخرى.");
                    }
                })
                .catch(() => alert("تأكد من اتصالك بالإنترنت."))
                .finally(() => {
                    btn.disabled = false;
                    btn.innerText = originalText;
                });
        };
    }

});


// تابه الاسعار

// 1. قاموس الأسعار
// 1. قاموس الأسعار
const perfumePrices = {
    'eco-30': 100, 'premium-30': 150,
    'eco-50': 200, 'premium-50': 250,
    'eco-100': 300, 'premium-100': 350,
    'بلية صغيرة': 30, 'بلية وسط': 50, 'بلية كبيرة': 70
};

// 2. وظيفة إظهار الخطأ
function showError(input, message) {
    const oldMsg = input.parentElement.querySelector('.error-msg');
    if (oldMsg) oldMsg.remove();
    const msg = document.createElement('span');
    msg.className = 'error-msg';
    msg.innerText = message;
    msg.style = "color: #ff4d4d; font-size: 12px; display: block; margin-bottom: 5px; font-weight: bold;";
    input.style.borderColor = "#ff4d4d";
    input.style.backgroundColor = "#fff5f5";
    input.parentElement.insertBefore(msg, input);
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    input.focus();
}

// تنظيف الخطأ عند الكتابة
document.addEventListener('input', function (e) {
    if (e.target.classList.contains('input') || e.target.classList.contains('perfume-input')) {
        e.target.style.borderColor = "#ddd";
        e.target.style.backgroundColor = "white";
        const msg = e.target.parentElement.querySelector('.error-msg');
        if (msg) msg.remove();
    }
});

// 3. تحديث السعر والإجمالي
function updatePriceNow(selectElement) {
    const parent = selectElement.closest('.perfume-item');
    const priceField = parent.querySelector('.price-input');
    const val = selectElement.value;
    if (priceField) {
        priceField.value = perfumePrices[val] || 0;
        calculateTotal();
    }
}

function calculateTotal() {
    let total = 0;
    const allPrices = document.querySelectorAll('.price-input');
    allPrices.forEach(input => { total += parseInt(input.value) || 0; });
    const totalDisplay = document.getElementById('total-amount');
    if (totalDisplay) { totalDisplay.value = total + " EGP"; }
}

// 4. وظيفة "اطلب الآن" من التابات 
function selectAndGo(productCode) {
    const firstSelect = document.querySelector('select[name="الحجم_1"]');
    if (firstSelect) {
        firstSelect.value = productCode;
        updatePriceNow(firstSelect);
    }
    const formSection = document.getElementById('form');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 5. إضافة عطر آخر
function addAnotherPerfume() {
    const container = document.getElementById('perfumeItems');
    const allItems = container.querySelectorAll('.perfume-item');
    const lastItem = allItems[allItems.length - 1];

    if (lastItem) {
        const lastInput = lastItem.querySelector('.perfume-input');
        const lastSelect = lastItem.querySelector('.size-select');
        if (lastInput && lastInput.value.trim() === "") { showError(lastInput, "برجاء إدخال اسم العطر أولاً"); return; }
        if (lastSelect && lastSelect.value === "") { showError(lastSelect, "برجاء اختيار حجم الزجاجة أولاً"); return; }
    }

    const itemCount = allItems.length + 1;
    const newItem = document.createElement('div');
    newItem.className = 'perfume-item';
    newItem.style = "border-bottom: 1px dashed #ccc; padding-bottom: 15px; margin-bottom: 15px; position: relative; padding-top: 15px;";

    newItem.innerHTML = `
      <button type="button" onclick="removePerfume(this)" style="position: absolute; left: 0; top: 0; background: #ff4d4d; color: white; border: none; border-radius: 5px; padding: 2px 8px; cursor: pointer; font-size: 12px;">مسح ×</button>
      <input class="input perfume-input" type="text" placeholder="إسم العطر" name="العطر_${itemCount}" autocomplete="off" required />
      <div class="suggestions-container" style="display:none; position:absolute; background:white; border:1px solid #ddd; width:100%; z-index:1000; max-height:200px; overflow-y:auto;"></div> 
      <select class="input size-select" name="الحجم_${itemCount}" required onchange="updatePriceNow(this)">
        <option value="" disabled selected>إختر حجم الزجاجة</option>
        <option value="eco-30">30 مللى - اقتصادية</option>
        <option value="premium-30">30 مللى - راقية + بوكس</option>
        <option value="eco-50">50 مللى - اقتصادية</option>
        <option value="premium-50">50 مللى - راقية + بوكس</option>
        <option value="eco-100">100 مللى - اقتصادية</option>
        <option value="premium-100">100 مللى - راقية + بوكس</option>
        <option value="بلية صغيرة">بلية صغيرة</option>
        <option value="بلية وسط">بلية وسط</option>
        <option value="بلية كبيرة">بلية كبيرة</option>
      </select>
      <div style="margin-top: 10px; display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 14px;">السعر:</span>
        <input class="input price-input" type="text" name="السعر_${itemCount}" value="0" readonly style="background:#f9f9f9; color:#2196f3; font-weight:bold; flex: 1;" />
      </div>
    `;
    container.appendChild(newItem);
}

function removePerfume(btn) { btn.closest('.perfume-item').remove(); calculateTotal(); }

// 6. محرك البحث الذكي
document.addEventListener('input', function (e) {
    if (e.target.classList.contains('perfume-input')) {
        const val = e.target.value.toLowerCase().trim();
        const parent = e.target.closest('.perfume-item');
        let box = parent.querySelector('.suggestions-container');
        if (val.length < 1) { if (box) box.style.display = 'none'; return; }
        if (window.allPerfumes) {
            const matches = window.allPerfumes.filter(p => p.toLowerCase().includes(val)).slice(0, 8);
            if (matches.length > 0) {
                box.innerHTML = matches.map(m => `<div class="suggest-item" style="padding:10px; cursor:pointer; border-bottom:1px solid #eee; background:white;">${m}</div>`).join('');
                box.style.display = 'block';
            } else { box.style.display = 'none'; }
        }
    }
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('suggest-item')) {
        const parent = e.target.closest('.perfume-item');
        parent.querySelector('.perfume-input').value = e.target.innerText;
        e.target.parentElement.style.display = 'none';
    } else {
        document.querySelectorAll('.suggestions-container').forEach(b => b.style.display = 'none');
    }
});

// 7. الإرسال وظهور البوب آب
function validateAndSend() {
    const orderForm = document.getElementById('orderForm');
    let hasError = false;
    document.querySelectorAll('.perfume-input').forEach(i => { if (i.value.trim() === "") { showError(i, "إسم العطر مطلوب"); hasError = true; } });
    document.querySelectorAll('.size-select').forEach(s => { if (s.value === "") { showError(s, "إختر الحجم"); hasError = true; } });
    const phone = document.querySelector('input[name="الهاتف"]');
    const address = document.querySelector('input[name="العنوان"]');
    if (address && address.value.trim() === "") { showError(address, "العنوان مطلوب"); hasError = true; }
    if (phone && phone.value.trim() === "") { showError(phone, "رقم التليفون مطلوب"); hasError = true; }
    if (hasError) return;
    const btn = document.getElementById('finalSubmitBtn');
    btn.value = "جاري الإرسال...";
    btn.disabled = true;
    fetch(orderForm.action, {
        method: 'POST',
        body: new FormData(orderForm),
        headers: { 'Accept': 'application/json' }
    })
        .then(res => {
            if (res.ok) {
                const modal = document.getElementById('successModal');
                if (modal) { modal.style.display = 'flex'; }
                orderForm.reset();
                calculateTotal();
            } else { alert("خطأ في الإرسال"); }
        })
        .catch(() => alert("تأكد من الإنترنت"))
        .finally(() => { btn.value = "إتمام الطلب"; btn.disabled = false; });
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) { modal.style.display = 'none'; }
}

// 8. وظيفة التابات (إصلاح مشكلة الظهور المتعدد)
function openTab(evt, sizeName) {
    var i, tabContent, tabBtns;

    // إخفاء كل التابات يدوياً وإجبارياً
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"; // إخفاء مباشر بالـ inline style
        tabContent[i].classList.remove("active-content");
    }

    // إزالة اللون النشط من كل أزرار التابات
    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // إظهار التابة اللي عليها الدور فقط
    const target = document.getElementById(sizeName);
    if (target) {
        target.style.display = "block"; // إظهار مباشر
        target.classList.add("active-content");
    }

    // تمييز الزرار الحالي
    evt.currentTarget.classList.add("active");
}
// نهايه تابه الاسعار