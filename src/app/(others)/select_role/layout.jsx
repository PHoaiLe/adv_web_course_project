

import './layout.css'

export default function SelectRoleLayout({children})
{
    return(
        <body>
            <div className="select-role-layout-frame min-h-screen">
                {children}
            </div>
        </body>
    )
}