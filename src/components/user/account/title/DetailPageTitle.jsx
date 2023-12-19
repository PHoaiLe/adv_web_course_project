// import './DetailPageTitle.css'
import "@/styles/globals.css"

function DetailPageTitle({MainTitle, Description, TitleComponent})
{
    return(
        <div className="user-detail-info-title text-white bg-cyan-500 font-sans text-xl ">
            <div className='user-detail-info-title-detail '>
                <h2>{MainTitle}</h2>
                {TitleComponent}
                {/* <Link  href={EditLink}><EditOutlined className='edit-link'/></Link> */}
            </div>
            <p>{Description}</p>
        </div>
    )
}

export default DetailPageTitle