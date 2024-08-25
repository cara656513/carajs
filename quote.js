const quotes = [
    {
        quote:"너 정말, 왜요, 왜요, 왜? 왜요, 왜요, 왜?",
        author:"왜요 왜요 왜?",
    },
    {
        quote:"좀 더 멀리멀리 닿을 수 있을까 길고 긴 여정에 마침표를 찍을 수만 있다면",
        author:"여섯 번째 여름",
    },
    {
        quote:"I just love you, 계속 널 바라볼게 All day, won't stop, yeah",
        author:"I Just Love Ya",
    },
    {
        quote:"Vida preciosa (ooh), livin' la vida loca (ooh) 의미 없단 건 결국 없다고, yeah",
        author:"Watch Me Woo!",
    },
    {
        quote:"너의 그곳에 내가 닿을 수 있게 (기다릴게) 너의 곁에 내가 숨 쉴 수 있길",
        author:"기다릴게",
    },
    {
        quote:"오래도록 꿈꿔왔던 이 순간 현실이 됐어 (look)",
        author:"Pixel world",
    },
    {
        quote:"꿈을 꾼다 흰 눈이 널 닮은 이 순간 멜로 영화처럼, 마침내 우린 결말이 되었죠",
        author:"Merry PLLIstmas",
    },
    {
        quote:"짜릿한 이 순간 바래왔던 이 느낌 바보야 니 얘기란 말야",
        author:"Pump Up The Volume!",
    },
    {
        quote:"많은 장면들을 보내고 나면 엔딩크레딧에는 너와 나뿐이야",
        author:"우리 영화",
    },
    {
        quote:"It's like a movie 우린 참 어렸었지 저 별들을 닮기엔 모든 게 서툴렀지",
        author:"WAY 4 LUV",
    },
    {
        quote:"어디 갈까? 고민하지 마 누가 뭐래도 난 충분하니까",
        author:"버추얼 아이돌",
    }, 
]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;