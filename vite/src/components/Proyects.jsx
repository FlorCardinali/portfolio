import Title from "./Title";

const Proyects = () => {

    const CardProyect = ({content, title,img,link}) => {
        return (
            <>
                <a href={link} target="_blank" className="  lg:hover:scale-105 cursor-pointer transition-all duration-300 max-w-[22rem] h-[550px] flex flex-col items-center justify-between bg-bgColor border-gray-200 rounded-lg pb-5">
                    
                    <img className="rounded-t-lg min-w-[100%] min-h-[50%] object-cover" src={img} alt="" />
                    
                    <div className="p-5 max-h-[40%] overflow-y-auto">
                        
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-contrast">{title}</h5>
                        
                        <p className=" mb-3 font-normal text-contrast/80">{content}</p>
                        
                    </div>
                    <div href="#" className="inline-flex items-center m-3 px-3 py-2 text-sm font-medium text-center text-contrast bg-green/80 rounded-lg hover:bg-green hover:text-white hover:font-extrabold ">
                            Ver más
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#aaa333" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                    </div>
                </a>
            </>
        );
    }

    return (
        <>
             
                <section className="bg-contrast w-screem space-y-12 h-fit gap-1 flex flex-col items-center  ">
                <div id="proyects-section">
                </div>
                    <Title
                        title="Proyectos"
                        content="Mis Proyectos Realizados tanto en ámbito educativo como personal."
                    />

                    <article className="flex-wrap  md:flex-row flex-col justify-center  items-center flex pb-14 lg:p-0 gap-4 ">

                        <CardProyect 
                            title="Bay of Cthulhu"
                            content="Juego desarrollado en coltexto de una Game Jam de 3 días con un grupo conformado por dos desarrolladores, dos ilustradores y un sonidista."
                            img="/proyecto1.png"
                            link="https://florenciacardinali.itch.io/bay-of-cthulhu" 
                        />

                      
                         <CardProyect 
                            title="Dashboard Simple"
                            content="Un dashboard creado con css y js vanilla como proyecto responsive de la universidad junto a un compañero de la cursada. Carece de funcionalidad real ya que el objetivo era lograr una estructura aplicando los conocimientos de Grid y Flex-box."
                            img="/proyecto2.png"
                            link="https://simple-dashboard-cardinali-suarez.netlify.app/" 
                        />
                        <CardProyect 
                            title="Carrera de caballos"
                            content="Primer juego en consola como proyecto final de Laboratorio de Computación I, trabajado en Python en grupos de a dos. El juego consiste en recrear el viejo juego de cartas del mismo nombre. "
                            img="/proyecto3.png"
                            link="https://github.com/FlorCardinali/proyecto-carrera-de-caballos/tree/master" 
                        />

                        <CardProyect 
                            title="To-Do App"
                            content="To do App de prueba para el curso de React, por temas de tiempo quedo presentada, pero proximamente tendra mas funcionalidades."
                            img="/proyecto4.png"
                            link="https://github.com/FlorCardinali/to-do-app?tab=readme-ov-file" 
                        />

                    </article>         
                </section>
                <div className="bg-bgColor w-screen h-[250px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cecbca" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,64C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </div>
            
        </>  
    );
}
//  
export default Proyects;
