import React, {useState} from 'react'
import Link from 'next/link'
import Hamburger from './hamburger'

export const Header = () => {

  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu", 
  });


  // State of our button
  const [disabled, setDisabled] = useState(false);


    const handleMenu = () => {
        disabledMenu();
        if (state.initial === false) {
          setState({
            initial: null,
            clicked: true,
            menuName: "Close"
          });
          console.log(1)
        } else if (state.clicked === true) {
          setState({
            clicked: !state.clicked,
            menuName: "Menu"
          });
          console.log(2)
        } else if (state.clicked === false) {
          setState({
            clicked: !state.clicked,
            menuName: "Close"
          });
          console.log(3)
        }
      };

    //Determine if our menu botton should be disabled
    const disabledMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false);
        }, 1200)
    }


  return (
    <header>
        <div className='relative z-30 '>
            <div>
                <div className='flex flex-row justify-between mt-10 md:mx-0 mx-5'>
                    <div className='text-2xl overflow-hidden mix-blend-overlay'>
                        <Link 
                        href='/'>
                            <a className='text-black font-extrabold'>HAMBRG.</a>
                            
                        </Link>
                    </div>
                    <menu className=''>
                        <button
                        disabled={disabled}
                        onClick={handleMenu}
                        >
                            Menu
                        </button>
                    </menu>
                </div>
            </div>
        </div>
        <Hamburger state={state}/>
    </header>
  )
}
