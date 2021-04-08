import React from "react"
import { Link } from "gatsby"
import * as headerStyles from './header.module.css'

const Header = ({title}) => (
    <div className={ headerStyles.header }>
        <div className={headerStyles.container}>
                <div className={headerStyles.logo}>
                    <Link to="/">
                        {title}
                    </Link>
                </div>
        </div>
    </div>
)

export default Header