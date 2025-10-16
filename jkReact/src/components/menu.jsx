import { useNavigate, useLocation, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Lnb () {
	const [count, setCount] = useState(0);
	const navi = useNavigate();
	const location = useLocation(); // 현재 URL 정보를 가져옴

	const [isMenuActive, setMenuActive] = useState(false);

	function openMenu () {
		setMenuActive(true);
	}

	function closeMenu () {
		setMenuActive(false);
	}

	function movePage (path, data) {
		console.log(path);
		navi(path,data)
	}

	function moveMoMenu (path, data) {
		closeMenu();  
		setTimeout(()=>{
		navi(path,data);
		},200);
	}

	function goList() {
		var pf = document.querySelector('.portfolio');
		pf.classList.add('on');
	}

	function goLcn() {
		var pf = document.querySelector('.lcnBox');
		pf.classList.add('on');
	}

	const GnbData = [
		// {txt:'Home', path:'/'},
		{txt:'Portfolio', path:'/portfolio'},
		// {txt:'Templates', path:'/templates'},
		// {txt:'Popup', path:'/popup'},
		// {txt:'PageList', path:'/pagelist'},
	];

	setTimeout(() => {
		var mList = document.querySelectorAll(".mList");

		mList.forEach(function(menu){
			menu.style.marginLeft = "0";
			menu.style.opacity = "1";
		})
	}, 100);
  return (
    <>
		<div className="w1600">
			<ul>
				{
					GnbData.map((list, index)=>{
					const isActive = location.pathname === list.path;
					if (list.path === "/") return null;
					// return <li key={index} className="mList" >
					// 			<button 
					// 				className={`btn-depth1 ${isActive ? "active" : ""} `}  
					// 				onClick={()=> movePage(list.path)}
					// 			>
					// 				{list.txt}
					// 			</button>
					// 		</li>;

					return <li key={index} className="mList" >
								<button onClick={()=> goList()}>
									{list.txt}
								</button>
							</li>
					})
				}

				<li className='mList'><button onClick={()=> goLcn()}>lcn</button></li>
			</ul>
		</div>
    </>
  )
}

export default Lnb
