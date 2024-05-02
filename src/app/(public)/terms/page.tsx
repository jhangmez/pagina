import { Card, CardBody, CardFooter } from '@nextui-org/card'

export default function Terms() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <ul className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
          <h1 className='font-bold text-xl '>Política de Privacidad</h1>
          <li className='px-2' id='correo'>
            <h2 className='font-semibold text-lg text-light-onPrimary dark:text-dark-onPrimary pt-4'>
              Recolección de Correos Electrónicos
            </h2>
            <p className='font-medium  pt-1'>
              Al utilizar este sitio web, usted acepta las prácticas descritas
              en esta política de privacidad.
            </p>
          </li>
          <li className='px-2' id='recoleccion'>
            <h2 className='font-semibold text-lg text-light-onPrimary dark:text-dark-onPrimary pt-4'>
              Recolección de Información Personal
            </h2>
            <p className='font-medium  pt-1'>
              Cuando usted llena un formulario en este sitio web para
              suscribirse a nuestro boletín informativo o para recibir
              actualizaciones sobre nuestros servicios o solicitar información,
              podemos pedirle cierta información personal, como su nombre y
              dirección de correo electrónico. Esta información se utilizará
              únicamente para los fines específicos no comerciales y no se
              compartirá con terceros sin su consentimiento explícito.
            </p>
          </li>
          <li className='px-2' id='uso'>
            <h2 className='font-semibold text-lg text-light-onPrimary dark:text-dark-onPrimary pt-4'>
              Uso de la Información
            </h2>
            <p className='font-medium  pt-1'>
              La información que recopilamos se utiliza para enviarle
              actualizaciones sobre nuestros servicios, anuncios de nuevos
              proyectos, eventos o cualquier otra información relevante que
              consideremos de su interés. También podemos utilizar su
              información para mejorar nuestros servicios y personalizar su
              experiencia en nuestro sitio web.
            </p>
          </li>
          <li className='px-2' id='consentimiento'>
            <h2 className='font-semibold text-lg text-light-onPrimary dark:text-dark-onPrimary pt-4'>
              Consentimiento
            </h2>
            <p className='font-medium  pt-1'>
              Al proporcionarnos su información personal a través de nuestros
              formularios, usted nos otorga su consentimiento para recopilar,
              utilizar y almacenar esa información de acuerdo con esta política
              de privacidad.
            </p>
          </li>
          <li className='px-2' id='noparticipacion'>
            <h2 className='font-semibold text-lg text-light-onPrimary dark:text-dark-onPrimary pt-4'>
              Optar por no Participar
            </h2>
            <p className='font-medium  pt-1'>
              Si en algún momento desea dejar de recibir comunicaciones de
              nuestra parte, puede optar por no participar siguiendo las
              instrucciones incluidas en cada correo electrónico que enviamos o
              poniéndose en contacto con nosotros a través de la información de
              contacto proporcionada al final de esta página. Respetaremos su
              solicitud y dejaremos de enviarle comunicaciones en el futuro.
            </p>
          </li>
          <li className='px-2' id='seguridad'>
            <h2 className='font-semibold text-lg text-light-onPrimary dark:text-dark-onPrimary pt-4'>
              Seguridad de la Información
            </h2>
            <p className='font-medium  pt-1'>
              Nos comprometemos a proteger la seguridad de su información
              personal y a tomar las medidas necesarias para garantizar su
              confidencialidad. Sin embargo, tenga en cuenta que ninguna medida
              de seguridad en línea es completamente infalible y no podemos
              garantizar la seguridad absoluta de su información.
            </p>
          </li>
          <li className='px-2' id='cambios'>
            <h2 className='font-semibold text-lg text-light-onPrimary dark:text-dark-onPrimary pt-4'>
              Cambios en la Política de Privacidad
            </h2>
            <p className='font-medium  pt-1'>
              Nos reservamos el derecho de actualizar esta política de
              privacidad en cualquier momento. Cualquier cambio en esta política
              entrará en vigencia inmediatamente después de su publicación en
              esta página.
            </p>
          </li>
          <li className='px-2' id='contacto'>
            <h2 className='font-semibold text-lg text-light-onPrimary dark:text-dark-onPrimary pt-4'>
              Contacto
            </h2>
            <p className='font-medium pt-1'>
              Si tiene alguna pregunta sobre esta política de privacidad o sobre
              cómo manejamos su información personal, no dude en ponerse en
              contacto con nosotros a través de{' '}
              <a
                href='mailto:jhangmez.pe@gmail.com'
                className='text-light-onPrimary dark:text-dark-onPrimary underline'
              >
                jhangmez.pe@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
