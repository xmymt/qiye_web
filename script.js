document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: '厨小宝', price: 1688, image: 'imgs/厨小宝.jpg' },
        { name: '喜浴宝', price: 1991, image: 'imgs/喜浴宝.jpg' },
        { name: '除菌安', price: 599, image: 'imgs/除菌安.jpg' }
    ];

    let currentSlide = 0;
    const container = document.querySelector('.carousel-container');

    function updateCarousel() {
        const product = products[currentSlide];
        // 创建新的slide
        const newSlide = document.createElement('div');
        newSlide.className = 'carousel-slide';
        newSlide.innerHTML = `
            <img src="${product.image}" alt="${product.name}" 
                style="width: 100%; 
                height: 400px; 
                object-fit: contain; 
                background: #fff;">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">¥${product.price}</p>
            </div>
        `;

        // 淡出当前slide
        const currentElement = container.querySelector('.carousel-slide');
        if (currentElement) {
            currentElement.style.opacity = '0';
            setTimeout(() => {
                container.removeChild(currentElement);
                // 添加并淡入新slide
                container.appendChild(newSlide);
                setTimeout(() => {
                    newSlide.style.opacity = '1';
                }, 50);
            }, 500);
        } else {
            container.appendChild(newSlide);
            setTimeout(() => {
                newSlide.style.opacity = '1';
            }, 50);
        }
    }

    // 自动轮播
    let autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % products.length;
        updateCarousel();
    }, 5000);

    // 切换按钮事件监听
    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentSlide = (currentSlide - 1 + products.length) % products.length;
        updateCarousel();
        autoSlideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % products.length;
            updateCarousel();
        }, 5000);
    });

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentSlide = (currentSlide + 1) % products.length;
        updateCarousel();
        autoSlideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % products.length;
            updateCarousel();
        }, 5000);
    });

    // 初始化显示
    updateCarousel();

    // 修改"关于我们"点击事件处理
    document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
        e.preventDefault();
        Swal.fire({
            title: '湖北安柏科技发展有限公司',
            html: `
                <div class="about-content" style="text-align: left; padding: 20px;">
                    <p style="font-weight: bold; color: #0066cc; font-size: 1.2em; margin-bottom: 15px;">
                        健康水生活，引领新未来
                    </p>
                    
                    <p style="margin-bottom: 15px;">
                        湖北安柏科技发展有限公司，成立于风光秀美、文化底蕴的赤壁市，是专注于水健康服务领域的创新型企业。自成立以来，公司始终致力于通过科技创新和高品质产品，为大多数提供客户全面的水健康解决方案，促进健康生活的提升与优化。
                    </p>
                    
                    <h3 style="color: #0066cc; margin: 15px 0;">核心产品</h3>
                    <ul style="list-style-type: none; padding-left: 20px;">
                        <li style="margin-bottom: 10px;">• 厨小宝：一站式厨房用水健康管家，为家庭农村的安全与便捷保驾护航，深受用户青睐。</li>
                        <li style="margin-bottom: 10px;">• 喜浴宝：专为家庭沐浴设计的水质优化产品，带来更舒适、更健康的沐浴体验。</li>
                    </ul>
                    
                    <p style="margin: 15px 0;">
                        我们的明星产品融合了先进的净水技术与人性化设计，解决了家庭用水的多个痛点，成为人群消费者改善水健康生活的首选。
                    </p>
                    
                    <h3 style="color: #0066cc; margin: 15px 0;">企业优势</h3>
                    <ol style="padding-left: 20px;">
                        <li>质量保证：从研发到生产，全程严格把控，确保产品质量经得起市场和时间的检验。</li>
                        <li>服务至上：秉持"客户第一"的服务理念，为客户提供专业的售后支持和咨询服务。</li>
                    </ol>
                    
                    <h3 style="color: #0066cc; margin: 15px 0;">企业战略</h3>
                    <p style="margin-bottom: 15px;">
                        湖北安柏科技发展有限公司以"创新健康水生活"为使命，未来将持续深耕水健康服务领域，研发更多满足消费者需求的产品，为千家万户带来更高品质的生活体验。我们积极关注可持续发展，致力于推动绿色科技在水健康领域的广泛应用。
                    </p>
                    
                    <p style="font-style: italic; color: #0066cc; margin-top: 20px;">
                        让每一滴水更健康，让每个家庭更幸福。湖北安柏科技，期待与您的参与，共创水健康新未来！
                    </p>
                </div>
            `,
            width: '800px',
            confirmButtonText: '关闭',
            confirmButtonColor: '#0066cc',
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        });
    });

    // 添加"购买支付"点击事件处理
    document.querySelector('a[href="#payment"]').addEventListener('click', function(e) {
        e.preventDefault();
        Swal.fire({
            title: '支付方式',
            html: `
                <div class="payment-content" style="padding: 20px;">
                    <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px;">
                        <div class="payment-section" style="text-align: center;">
                            <h3 style="color: #1677ff; margin-bottom: 15px;">
                                <i class="fab fa-alipay" style="color: #1677ff;"></i> 支付宝
                            </h3>
                            <img src="photo/1.jpg" alt="支付宝收款码" 
                                style="width: 200px; height: 200px; 
                                object-fit: cover; 
                                border: 1px solid #eee; 
                                border-radius: 8px;
                                box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        </div>
                        
                        <div class="payment-section" style="text-align: center;">
                            <h3 style="color: #2aae67; margin-bottom: 15px;">
                                <i class="fab fa-weixin" style="color: #2aae67;"></i> 微信支付
                            </h3>
                            <img src="photo/2.jpg" alt="微信收款码" 
                                style="width: 200px; height: 200px; 
                                object-fit: cover;
                                border: 1px solid #eee; 
                                border-radius: 8px;
                                box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        </div>
                    </div>
                    
                    <div class="payment-section" style="text-align: left; margin-top: 30px;">
                        <h3 style="color: #0066cc; margin-bottom: 15px;">
                            <i class="fas fa-university"></i> 公司对公账户
                        </h3>
                        <p style="background: #f8f9fa; padding: 15px; border-radius: 8px; font-family: monospace;">
                            <strong>开户行：</strong>工商银行咸宁赤壁新街口支行<br>
                            <strong>账户名：</strong>湖北安柏科技发展有限公司<br>
                            <strong>账号：</strong>1818050809200100916
                        </p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 10px; background: #fff7e6; border-radius: 8px; color: #666;">
                        <p><i class="fas fa-info-circle" style="color: #ff9900;"></i> 付款后请保留付款凭证，如有问题请联系客服</p>
                    </div>
                </div>
            `,
            width: '600px',
            confirmButtonText: '关闭',
            confirmButtonColor: '#0066cc',
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        });
    });

    // 添加"加入我们"点击事件处理
    document.querySelector('a[href="#join"]').addEventListener('click', function(e) {
        e.preventDefault();
        Swal.fire({
            title: '加入我们',
            html: `
                <div class="join-content" style="text-align: left; padding: 20px;">
                    <p style="margin-bottom: 20px; line-height: 1.8;">
                        在这个经济放缓的时期，很多人都在寻找额外的收入来源。为此，我们公司特别推出了一个极具灵活性的自由工作机会。无论您身处何地，无论白天还是夜晚，只要您愿意，都可以加入我们的团队。我们承诺，每一位有才能的合作伙伴都能在此实现自己的价值，每一位投入时间的朋友都将得到相应的回报。
                    </p>
                    
                    <p style="margin-bottom: 20px; line-height: 1.8;">
                        无论您是正在寻求工作的求职者，还是希望通过兼职增加收入的在职人员，我们都真诚地欢迎您与我们共同前行，携手度过这段不平凡的旅程。祝福每一位的早晨、午后和夜晚都充满希望和动力，愿大家乘风破浪，一切顺利！
                    </p>
                    
                    <p style="margin-top: 30px; text-align: center; color: #0066cc;">
                        <i class="fab fa-weixin" style="margin-right: 8px;"></i>
                        <strong>企业微信：19086555041</strong>
                    </p>
                </div>
            `,
            width: '700px',
            confirmButtonText: '关闭',
            confirmButtonColor: '#0066cc',
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        });
    });

    // AI助手功能
    const chatMessages = document.querySelector('.chat-messages');
    const userInput = document.querySelector('#userInput');
    const sendButton = document.querySelector('#sendMessage');

    // 请求频率限制配置
    const RATE_LIMIT = {
        maxRequests: 5,      // 最大请求次数
        timeWindow: 60000,   // 时间窗口（毫秒）
        requests: [],        // 请求时间记录
        cooldownTime: 5000   // 冷却时间（毫秒）
    };

    let lastRequestTime = 0;  // 上次请求时间

    // 检查请求频率
    function checkRateLimit() {
        const now = Date.now();
        
        // 清理过期的请求记录
        RATE_LIMIT.requests = RATE_LIMIT.requests.filter(time => 
            now - time < RATE_LIMIT.timeWindow
        );

        // 检查是否超过频率限制
        if (RATE_LIMIT.requests.length >= RATE_LIMIT.maxRequests) {
            const oldestRequest = RATE_LIMIT.requests[0];
            const timeToWait = RATE_LIMIT.timeWindow - (now - oldestRequest);
            throw new Error(`请求过于频繁，请等待 ${Math.ceil(timeToWait / 1000)} 秒后再试`);
        }

        // 检查冷却时间
        if (now - lastRequestTime < RATE_LIMIT.cooldownTime) {
            throw new Error(`请等待 ${Math.ceil((RATE_LIMIT.cooldownTime - (now - lastRequestTime)) / 1000)} 秒后再发送消息`);
        }

        // 记录新请求
        RATE_LIMIT.requests.push(now);
        lastRequestTime = now;
    }

    // 错误类型定义
    const ErrorTypes = {
        RATE_LIMIT: 'RATE_LIMIT',
        NETWORK: 'NETWORK',
        API: 'API',
        TOKEN: 'TOKEN',
        UNKNOWN: 'UNKNOWN'
    };

    // 错误处理函数
    function handleError(error, type = ErrorTypes.UNKNOWN) {
        console.error(`Error [${type}]:`, error);

        let userMessage;
        switch (type) {
            case ErrorTypes.RATE_LIMIT:
                userMessage = error.message;
                break;
            case ErrorTypes.NETWORK:
                userMessage = '网络连接出现问题，请检查您的网络连接后重试。';
                break;
            case ErrorTypes.API:
                userMessage = '服务暂时不可用，正在使用本地回答为您服务。';
                break;
            case ErrorTypes.TOKEN:
                userMessage = '认证失败，请稍后重试。';
                break;
            default:
                userMessage = '抱歉，发生了未知错误，请稍后重试。';
        }

        return userMessage;
    }

    // 预设的问答对
    const qaDatabase = {
        '产品': '我们有三款主打产品：厨小宝(¥1688)、喜浴宝(¥1991)和除菌安(¥599)。每款产品都专注于解决不同场景的用水问题。',
        '价格': '厨小宝售价¥1688，喜浴宝售价¥1991，除菌安售价¥599。所有产品都享受质保服务。',
        '联系': '您可以通过以下方式联系我们：\n企业微信：19086555041\n公司地址：湖北省赤壁市新街口B3栋5层508号',
        '支付': '我们支持多种支付方式，包括微信支付、支付宝以及银行转账。具体可以点击上方的"购买支付"查看详情。',
        '售后': '我们提供专业的售后支持，如有任何问题，请联系企业微信：19086555041',
        '发货': '正常情况下，我们会在收到付款后24小时内发货。',
        '安装': '我们的产品都配有详细的安装说明书，一般用户可以自行安装。如需安装服务，可以联系客服安排。',
        '合作': '如果您对加入我们感兴趣，可以点击上方的"加入我们"了解详情。'
    };

    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        messageDiv.textContent = content;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // API配置
    const API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
    const API_KEY = '637edab928fdd9be89f82a23ee63ca43.FivJ7MjHmbqrx1wy'; // 更新为实际的API Key

    // 修改 generateToken 函数
    async function generateToken() {
        try {
            const [id, secret] = API_KEY.split('.');
            const now = Date.now();
            const exp = now + 3600000; // Token有效期1小时

            // 创建 header
            const header = {
                alg: 'HS256',
                sign_type: 'SIGN'
            };

            // 创建 payload
            const payload = {
                api_key: id,
                exp: exp,
                timestamp: now
            };

            // 使用 jsrsasign 生成 token
            const sHeader = JSON.stringify(header);
            const sPayload = JSON.stringify(payload);
            const sJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, secret);
            
            return sJWT;
        } catch (error) {
            console.error('Token generation failed:', error);
            return null;
        }
    }

    // 修改调用AI API的函数
    async function callAIAPI(message) {
        try {
            // 检查请求频率
            checkRateLimit();

            const token = await generateToken();
            if (!token) {
                throw new Error('Token generation failed');
            }

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'glm-4',
                    messages: [
                        {
                            role: 'system',
                            content: '你是湖北安柏科技发展有限公司的AI助手，负责回答用户关于公司产品和服务的问题。'
                        },
                        {
                            role: 'user',
                            content: message
                        }
                    ]
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            return data.choices[0].message.content;

        } catch (error) {
            let errorType;
            if (error.message.includes('请求过于频繁') || error.message.includes('请等待')) {
                errorType = ErrorTypes.RATE_LIMIT;
            } else if (error.name === 'AbortError') {
                errorType = ErrorTypes.NETWORK;
            } else if (error.message.includes('Token')) {
                errorType = ErrorTypes.TOKEN;
            } else if (error.message.includes('API')) {
                errorType = ErrorTypes.API;
            }

            const errorMessage = handleError(error, errorType);
            
            if (errorType === ErrorTypes.API) {
                return processLocalFallback(message);
            }
            
            throw new Error(errorMessage);
        }
    }

    // 本地备用回答处理（当API调用失败时使用）
    function processLocalFallback(input) {
        const userQuestion = input.toLowerCase();
        let bestMatch = null;
        let bestMatchScore = 0;

        for (let key in qaDatabase) {
            if (userQuestion.includes(key.toLowerCase())) {
                const matchScore = key.length;
                if (matchScore > bestMatchScore) {
                    bestMatch = key;
                    bestMatchScore = matchScore;
                }
            }
        }

        return bestMatch 
            ? qaDatabase[bestMatch]
            : '抱歉，我暂时无法连接到服务器。您可以询问关于产品、价格、支付方式、售后服务等基本问题，我会尽力为您解答。';
    }

    // 修改发送消息的处理函数
    async function handleSend() {
        const message = userInput.value.trim();
        if (!message) return;

        // 禁用输入和发送按钮
        userInput.disabled = true;
        sendButton.disabled = true;

        // 显示用户消息
        addMessage(message, true);
        userInput.value = '';

        // 显示正在输入提示
        const loadingMessage = document.createElement('div');
        loadingMessage.className = 'message bot';
        loadingMessage.textContent = '正在思考...';
        chatMessages.appendChild(loadingMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const reply = await callAIAPI(message);
            chatMessages.removeChild(loadingMessage);
            addMessage(reply);
        } catch (error) {
            chatMessages.removeChild(loadingMessage);
            addMessage(error.message);
        } finally {
            // 重新启用输入和发送按钮
            userInput.disabled = false;
            sendButton.disabled = false;
            userInput.focus();
        }
    }

    // 添加发送按钮点击事件
    sendButton.addEventListener('click', handleSend);

    // 添加输入框回车事件
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    // 添加聊天框样式
    const style = document.createElement('style');
    style.textContent = `
        .chat-messages {
            height: 300px;
            overflow-y: auto;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
        .message {
            margin-bottom: 1rem;
            padding: 0.8rem;
            border-radius: 8px;
            max-width: 80%;
            word-wrap: break-word;
        }
        .message.bot {
            background: #e3f2fd;
            margin-right: auto;
        }
        .message.user {
            background: #e8f5e9;
            margin-left: auto;
        }
        .chat-input {
            display: flex;
            gap: 0.5rem;
        }
        .chat-input input {
            flex: 1;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        .chat-input button {
            padding: 0.8rem 1.5rem;
            background: var(--primary-gradient);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: opacity 0.3s;
        }
        .chat-input button:hover {
            opacity: 0.9;
        }
    `;
    document.head.appendChild(style);
}); 