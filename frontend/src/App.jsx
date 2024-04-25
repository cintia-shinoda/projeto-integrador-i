import { useForm } from 'react-hook-form';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  const { register, handleSubmit, setError, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setError();
  };

  return (
    <>
      <header className="flex justify-between p-4">
        <img src="src/assets/logo-sitio-rodape.webp" alt="logo do sitio agar"  />
        
      </header>

      <main className="border flex flex-col items-center text-slate-100 gap-2 bg-[url('src/assets/background.jpg')] bg-cover bg-no-repeat bg-center justify-center">
        <div className='flex items-baseline flex-col p-5'>
          <h2 className="text-4xl p-4 text-black font-bold ">OS <span className="text-[#F8A41C] text-8xl">300</span></h2>
          
          <p className='text-black'>Faça parte <b>da legião dos amigos</b>  do Sítio Agar.</p>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row  justify-center items-end p-5 gap-4 ">

          <div className="text-[#F8A41C] flex flex-col max-w-md p-5 align-bottom gap-2">
          <p className="text-3xl uppercase italic">Venha ser um dos 300 do Sítio Agar!</p>

          <p className="text-base text-slate-100">Estamos completando 30 anos de história! Superando todas as adversidades, chegamos até aqui e agora precisamos da sua ajuda para continuar.</p>
          </div>


          <form 
            className="flex flex-col items-center gap-5 p-5 bg-[#F8A41C] text-black max-w-md rounded-md" 
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-2xl">Torne-se um dos nossos 300 sócios colaboradores! Cadastre-se agora e seja mais um pilar de força da nossa comunidade.</p>
            
            <div className="flex flex-col gap-1 w-full">
              <input {...register("name", {required: { value: true, message: '*Preencha o seu nome'}})} 
                placeholder="Seu nome"
                className="text-slate-900 p-2"
                
              />
            {errors.name && <p className='text-red-600 text-sm'>{errors.name.message}</p>}

            </div>
            
            <div className="flex flex-col gap-1 w-full">
              <input {...register("email",
                {required: { value: true, message:'*Preencha seu email' }
                })} 
                type="email"
                placeholder="Seu e-mail"
                className="text-slate-900 p-2"
              />

              {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
            </div>
            
            
            <div className="flex flex-col gap-1 w-full">
              <input {...register("tel", 
                { required: { value: true, message: '*Preencha o número de telefone'},
                  pattern: { value: /\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}-[0-9]{4}$/, message: 'Telefone inválido' }
                })} 
                type='tel'
                placeholder="DDD + WhatsApp"
                className="text-slate-900 p-2"
              />

              {errors.tel && <p className='text-red-600 text-sm'>{errors.tel.message}</p>}
            </div>

            <button type="submit" className="mt-8 uppercase text-[#F8A41C] w-1/2 bg-black p-2 hover:bg-slate-900 transition-all">
              Cadastrar
            </button>
          </form>
        </div>
        
      </main>

      <section className=" text-slate-950 justify-center items-center flex flex-col p-8 gap-2">
        <h2 className="text-2xl uppercase italic text-[#F8A41C]">Um ato de solidariedade que retorna para você</h2>
        
        <p>Como forma de agradecimento por se juntar à nossa corrente do bem, ao fazer sua inscrição você ganhará alguns brindes especiais:</p>
      
        <img src="src/assets/kit300.png" alt="kit de camiseta, certificado e pin da campanha do Sítio Agar" className='w-1/2'/>
      </section>

      <section className="flex flex-col gap-5 items-center justify-between p-24 bg-[#F8A41C]">
        <h3 className="text-2xl italic text-blue-700 uppercase">30 anos de história, acolhimento e amor</h3>

        <p>Somos uma Organização da Sociedade Civil (OSC) sem fins lucrativos. Abrimos nossas portas em 1993, em virtude da iniciativa de um religioso monfortino. Éramos uma Casa de Apoio que atendia crianças portadoras do vírus HIV ou doentes de aids. 
          <span className='font-bold'>Atualmente, acolhemos em regime de moradia crianças e adolescentes, além de adultos com deficiências, idosos e pessoas em situação de vulnerabilidade. No site, você encontra todos os nossos projetos.</span>
        </p>

        <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
          <img src="src/assets/dialogo_img.jpg" alt="" className='w-full md:w-1/4'/>

          <img src="src/assets/sitioAgar2.jpeg" alt="" className='w-full md:w-1/4'/>
          
          <img src="src/assets/sitioAgar3.jpg" alt="" className='w-full md:w-1/4'/>
      
        </div>
      </section>
      
      <footer className='bg-blue-600 text-slate-200 items-center justify-between flex gap-2 p-8'>

        <p className='text-[#F8A41C] text-2xl font-bold'>Fale Conosco</p>

        <ul className='text-lg'>
          <li className='font-bold'>Unidade Cajamar (Matriz)</li>
          <li>Telefone: 11 99791-6001</li>
          <li>Email: atendimento@sitioagar.com.br</li>
        </ul>
        
        <ul className='flex gap-2'>
          <a href="">
            <FaFacebook className='w-6 h-6'/>
          </a>
          
          <a href="">
            <FaLinkedin className='w-6 h-6'/>
          </a>
          
          <a href="">
            <FaInstagram className='w-6 h-6' />
          </a>
        </ul>

      </footer>
      
    </>
  )
}

export default App

