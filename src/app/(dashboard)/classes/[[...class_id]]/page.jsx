import ClassPostBoard from "@/components/classes/detail/ClassPostBoard"
import ClassSupportedFeature from "@/components/classes/detail/ClassSupportedFeature"


import './page.css'

function ClassDetailPage({params})
{
    console.log(params.class_id[0])

    return(
        <>
            <div className="relative md:pt-32 pb-32 pt-12 border-5 rounded-lg w-full bg-cover bg-[url('https://img.freepik.com/free-vector/flat-background-back-school-season_23-2150565139.jpg?w=1060&t=st=1702904156~exp=1702904756~hmac=9c8de07c385b1275968d006637570dd0ee5697c63be662a0a9053c3351c152a1')]">
                <div className="text-6xl text-center uppercase text-white font-sans">Educa - Class 1</div>
            </div>
            <section className="text-gray-600 body-font">
                <ClassSupportedFeature />

                <div>
                    <ClassPostBoard />
                </div>
            </section>
        </>
    )
}


export default ClassDetailPage