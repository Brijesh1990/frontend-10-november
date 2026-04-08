import React from 'react'
import HeaderApp from './components/HeaderApp'
import NavbarApp from './components/NavbarApp'
import ContentApp from './components/ContentApp'
import FooterApp from './components/FooterApp'
import LoginApp from './components/pages/LoginApp'
export default function Layout() {
return (
<div>
<HeaderApp />
<NavbarApp />
<ContentApp />
<FooterApp />
<LoginApp />

</div>
)
}
