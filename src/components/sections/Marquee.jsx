import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
    return (

        // <marquee
        //     behavior='scroll'
        //     scrollamount='2'
        //     // width='50%'
        //     direction='right'
        //     // height='50px'
        //     style={{fontSize: '15px', wordSpacing: '25px', opacity: '0.4', paddingTop: '10px', fontWeight: 'bold' }}
        // >
        //     Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill Share-Skill
        // </marquee>

        <Marquee autoFill speed={10} style={{color:'#505F98' ,opacity:'0.5', wordSpacing:'10px', padding:'10px', fontWeight:'bold'}}>
             <p> Skill Share-  </p>
        </Marquee>

    )
}
