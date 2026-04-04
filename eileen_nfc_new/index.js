// --- 1. 数据配置 (22个数据一字未删) ---
const knotData = {
    "Knot 1": {
        detailImg: "././assets/knot 1 trans 1.png",
        type: "This is a 4-strand round braid (or crown-sinnet style weave) mounted to a wooden support via Lark's Head knots. It is a classic technique used in decorative macramé, nautical rope work, and heavy-duty utility slings (like those used for swings or plant hangers).",
        material: "White Polyester",
        date: "January 28, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 2": {
        detailImg: "././assets/knot 2 trans 1.png",
        type: "This is a Crown Sinnet (Square Braid) made from 3-strand twisted synthetic rope. It is a classic decorative knotting technique used in macramé for plant hangers or keychains to add bulk and visual interest.",
        material: "White Polyester",
        date: "January 28, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 3": {
        detailImg: "././assets/knot 3 trans 1.png",
        type: "This is a Two-Strand Twist (or Rope Braid) mounted via Lark's Head knots. It is a fundamental technique in macramé and nautical crafts, often used for decorative cords, bag handles, or as a subtle structural element that mimics the look of heavy-duty marine rope.",
        material: "White Polyester",
        date: "January 29, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 4": {
        detailImg: "././assets/knot 4 trans 1.png",
        type: "This is a Spiral Half-Knot Sinnet (also known as a Spiral Stitch). It is a highly textured, 3D decorative element that provides more bulk and structural stiffness than a simple twist or braid. It is commonly used in bohemian-style wall hangings and the arms of macramé plant hangers.",
        material: "White Polyester",
        date: "January 29, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 5": {
        detailImg: "././assets/knot 5 trans 1.png",
        type: "This is a Single-Strand Spiral Half-Knot Sinnet made from 3-strand twisted rope. It is a minimalist decorative element used to add fine, directional detail to macramé projects without the heavy bulk of a multi-strand braid. It is often used for fringe accents, jewelry, or light-duty hanging cords.",
        material: "White Polyester",
        date: "January 29, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 6": {
        detailImg: "././assets/knot 6 trans 1.png",
        type: "This is a Spiral Half-Hitch Sinnet made from 3-strand twisted rope. It is a popular macramé technique for adding a sense of motion and rhythm to vertical elements without adding the heavy bulk of a square or box braid.",
        material: "White Polyester",
        date: "January 30, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 7": {
        detailImg: "././assets/knot 7 trans 1.png",
        type: "This is an 8-Strand Round Braid that begins as a wide-mount display of Lark's Head Knots. It is a sophisticated example of macramé tapering, moving from a flat, horizontal orientation to a dense, vertical cylindrical form. This type of construction is typically used for heavy-duty structural elements like high-end furniture suspensions or architectural rope art.",
        material: "White Polyester",
        date: "January 30, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 8": {
        detailImg: "././assets/knot 8 trans 1.png",
        type: "This is a Spiral Half-Hitch Cluster made from 3-strand twisted rope. It is a decorative, maximalist technique used to add significant visual weight and organic texture to a piece. It is commonly used as a focal point in boho-style wall hangings or as a decorative pom-pom style termination for large rope installations.",
        material: "White Polyester",
        date: "January 30, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 9": {
        detailImg: "././assets/knot 9 trans 1.png",
        type: "This is a 6-strand round braid constructed from 3-strand twisted rope. It is a heavy-duty, decorative sinnet that offers a balance between the simplicity of a standard 4-strand braid and the extreme density of an 8-strand version. It is commonly used in nautical high-end rigging, custom swing ropes, or large-scale fiber art installations.",
        material: "White Polyester",
        date: "January 30, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 10": {
        detailImg: "././assets/knot 10 trans 1.png",
        type: "This is an Overhand Knot Sinnet (also known as a Knotted Rope) starting from a Gathering Knot. It is a robust, utilitarian construction that provides maximum grip and a primitive, heavy-duty aesthetic. It is frequently seen in gym climbing ropes, nautical ladders, or as a bold decorative element in large-scale macramé.",
        material: "White Polyester",
        date: "January 30, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 11": {
        detailImg: "././assets/knot 11 trans 1.png",
        type: "This is a classic, high-density 4-strand round braid that provides a professional, nautical aesthetic. It is a sturdy construction commonly used for decorative tassels, furniture suspension, or structural elements in large-scale macramé.",
        material: "White Polyester",
        date: "February 12, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 12": {
        detailImg: "././assets/knot 12 trans 1.png",
        type: "This is a 4-strand round braid shown in transition. It illustrates the process of taking multiple 3-strand twisted ropes and consolidating them into a single, rigid, cylindrical column. This specific braid-to-fringe look is a common design choice in the tails of macramé wall hangings or the decorative tassels of outdoor hammocks.",
        material: "White Polyester",
        date: "February 12, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 13": {
        detailImg: "././assets/knot 13 trans 1.png",
        type: "This is a Square Knot (Reef Knot) made from 3-strand twisted rope. It is a primary structural knot used to create stability and flat patterns. It acts as a bridge, allowing a large number of hanging ropes to be organized into a specific geometric layout.",
        material: "White Polyester",
        date: "February 12, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 14": {
        detailImg: "././assets/knot 14 trans 1.png",
        type: "This is a Tapered Multi-Strand Braid made from 3-strand twisted rope. It demonstrates a sophisticated method of gathering a large volume of rope into a single, dense structural element. It is commonly found in the construction of high-end hammock suspensions, large-scale wall tapestries, or decorative nautical fenders.",
        material: "White Polyester",
        date: "February 12, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 15": {
        detailImg: "././assets/knot 15 trans 1.png",
        type: "This is a Single-Strand Half-Hitch Spiral (often called a Snake Sinnet in decorative macramé). It is a lightweight but highly textured decorative cord used for adding directional movement to a design. It is less bulky than a square or round braid, making it ideal for delicate accents or fringe details.",
        material: "White Polyester",
        date: "February 12, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 16": {
        detailImg: "././assets/knot 16 trans 1.png",
        type: "This is a Double Crown Sinnet Chain made from 3-strand twisted rope. It is a heavy-gauge decorative element that provides a massive, high-relief texture. In macramé and nautical crafts, this is often used for premium statement pieces such as heavy drapery tie-backs, ornamental bell ropes, or central structural pillars in large-scale wall hangings.",
        material: "White Polyester",
        date: "February 12, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 17": {
        detailImg: "././assets/knot 17 trans 1.png",
        type: "This is an Elongated Spiral Half-Knot Sinnet made from 3-strand twisted rope. It is a classic decorative element used to add flow and a sense of organic growth to a design. It is frequently used for the hanging arms of macramé plant holders or as a central focal point in wall art.",
        material: "White Polyester",
        date: "February 18, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 18": {
        detailImg: "././assets/knot 18 trans 1.png",
        type: "This is a Coiled Gathering Knot (or Service Wrap) made from 3-strand twisted rope. It is a functional and decorative finishing knot used to consolidate multiple strands into a single, manageable column. It is a signature element in nautical rigging and large-scale macramé installations, often used to create tassels or to transition between different sections of a design.",
        material: "White Polyester",
        date: "February 18, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 19": {
        detailImg: "././assets/knot 19 trans 1.png",
        type: "This is an Overhand Knot Chain made from 3-strand twisted rope. It is a heavy-duty, utilitarian construction used to add significant grip, bulk, and a rhythmic beaded aesthetic to a design. It is commonly used in nautical applications for climbing or as a bold, primitive decorative element in macramé wall hangings.",
        material: "White Polyester",
        date: "February 18, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 20": {
        detailImg: "././assets/knot 20 trans 1.png",
        type: "The Diamond Knot is a premium decorative stopper used to provide a clean, weighted finish to a cord. It is a favorite in nautical crafts and macramé for finishing keychains, bell ropes, or the bottom of decorative wall hangings.",
        material: "White Polyester",
        date: "February 18, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 21": {
        detailImg: "././assets/knot 21 trans 1.png",
        type: "This is a Stacked Overhand Sinnet made from 3-strand twisted rope. It is a bold, utilitarian construction often used in large-scale fiber art to create weighted vertical lines or as a primitive decorative accent in nautical-themed designs.",
        material: "White Polyester",
        date: "February 18, 2026",
        location: "Art Center College of Design Hallway"
    },
    "Knot 22": {
        detailImg: "././assets/knot 22 trans 1.png",
        type: "This is an Alternating Square Knot Mesh made from 3-strand twisted rope. It is a fundamental macramé technique used to create surface area and decorative screens. It is commonly seen in the body of macramé wall hangings, market bags, or the functional netting of a plant hanger.",
        material: "White Polyester",
        date: "February 18, 2026",
        location: "Art Center College of Design Hallway"
    }
};

// --- 2. 交互节点与变量 ---
const wrappers = document.querySelectorAll('.box-wrapper');
const modal = document.getElementById('knot-modal');
const closeBtn = document.querySelector('.close-btn');

const burgerBtn = document.getElementById('burgerBtn');
const fullMenu = document.getElementById('fullMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');

let isMobile = window.innerWidth <= 768;
let activeWrapper = null; 

window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
});

// --- 3. 移动端全屏菜单打开/关闭逻辑 ---
burgerBtn.addEventListener('click', () => {
    fullMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
});

closeMenuBtn.addEventListener('click', () => {
    fullMenu.style.display = 'none';
    document.body.style.overflow = '';
});

// 点击菜单链接自动关闭 (如果有内页跳转不需要这行，单页跳转需要)
const menuLinks = document.querySelectorAll('.mobile-menu-content a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        fullMenu.style.display = 'none';
        document.body.style.overflow = '';
    });
});

// --- 4. 弹窗展示逻辑 (完全保留) ---
function showModal(imgAlt, imgSrc) {
    const data = knotData[imgAlt] || {};
    const finalImgToDisplay = data.detailImg ? data.detailImg : imgSrc;
    document.getElementById('modal-img').src = finalImgToDisplay;
    document.getElementById('info-type').innerText = data.type || "Information pending.";
    document.getElementById('info-material').innerText = data.material || "-";
    document.getElementById('info-date').innerText = data.date || "-";
    document.getElementById('info-location').innerText = data.location || "-";

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; 
}

// --- 5. 磁场排斥逻辑 (完全保留) ---
function openKnot(wrapper, box, img) {
    wrapper.style.zIndex = '50';
    box.style.boxShadow = '0 25px 60px rgba(139, 116, 84, 0.4)';

    let scaleMultiplier = 2.5;
    let targetWidth = wrapper.offsetWidth * scaleMultiplier;
    let targetHeight = wrapper.offsetHeight * scaleMultiplier;

    if (img && img.naturalWidth > 0) {
        const ratio = img.naturalHeight / img.naturalWidth;
        const maxScreenHeight = isMobile ? 0.6 : 0.75;
        targetHeight = window.innerHeight * maxScreenHeight; 
        targetWidth = targetHeight / ratio;
        
        const minWidth = wrapper.offsetWidth * (isMobile ? 1.2 : 1.5);
        if (targetWidth < minWidth) {
            targetWidth = minWidth;
            targetHeight = targetWidth * ratio;
        }
        img.style.transform = 'scale(1)';
    }

    const leftOffset = -(targetWidth - wrapper.offsetWidth) / 2;
    const topOffset = -(targetHeight - wrapper.offsetHeight) / 2;

    box.style.width = `${targetWidth}px`;
    box.style.height = `${targetHeight}px`;
    box.style.left = `${leftOffset}px`;
    box.style.top = `${topOffset}px`;

    const rect = wrapper.getBoundingClientRect();
    const hx = rect.left + rect.width / 2;
    const hy = rect.top + rect.height / 2;

    wrappers.forEach(otherWrapper => {
        if (otherWrapper === wrapper) return;
        const otherBox = otherWrapper.querySelector('.box');
        const oRect = otherWrapper.getBoundingClientRect();
        const ox = oRect.left + oRect.width / 2;
        const oy = oRect.top + oRect.height / 2;
        const dx = ox - hx;
        const dy = oy - hy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = window.innerWidth * (isMobile ? 0.6 : 0.3); 

        if (dist < maxDist) {
            const force = Math.pow((maxDist - dist) / maxDist, 1.2); 
            const pushDist = force * (isMobile ? 60 : 180); 
            const angle = Math.atan2(dy, dx);
            otherBox.style.transform = `translate(${Math.cos(angle) * pushDist}px, ${Math.sin(angle) * pushDist}px) scale(0.92)`;
            otherBox.style.opacity = '0.5';
        } else {
            otherBox.style.transform = `scale(0.92)`;
            otherBox.style.opacity = '0.5';
        }
    });
}

function closeKnot(wrapper, box, img) {
    wrapper.style.zIndex = '1';
    box.style.boxShadow = 'none';
    box.style.width = ''; box.style.height = '';
    box.style.left = ''; box.style.top = '';
    if (img) img.style.transform = '';

    wrappers.forEach(otherWrapper => {
        const otherBox = otherWrapper.querySelector('.box');
        otherBox.style.transform = 'translate(0px, 0px) scale(1)';
        otherBox.style.opacity = '1';
    });
}

// --- 6. 事件绑定 ---
wrappers.forEach(wrapper => {
    const box = wrapper.querySelector('.box');
    const img = wrapper.querySelector('img');

    // 桌面端 Hover 触发排斥
    wrapper.addEventListener('mouseenter', () => {
        if (!isMobile) openKnot(wrapper, box, img);
    });
    wrapper.addEventListener('mouseleave', () => {
        if (!isMobile) closeKnot(wrapper, box, img);
    });

    // 点击打开弹窗
    wrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        const imgAlt = img ? img.getAttribute('alt') : null;
        const imgSrc = img ? img.getAttribute('src') : null;

        if (isMobile) {
            if (activeWrapper !== wrapper) {
                if (activeWrapper) {
                    closeKnot(activeWrapper, activeWrapper.querySelector('.box'), activeWrapper.querySelector('img'));
                }
                openKnot(wrapper, box, img);
                activeWrapper = wrapper;
            } else {
                showModal(imgAlt, imgSrc);
            }
        } else {
            showModal(imgAlt, imgSrc);
        }
    });
});

closeBtn.addEventListener('click', hideModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
    if (isMobile && activeWrapper && !modal.contains(e.target) && !fullMenu.contains(e.target)) {
        closeKnot(activeWrapper, activeWrapper.querySelector('.box'), activeWrapper.querySelector('img'));
        activeWrapper = null;
    }
});