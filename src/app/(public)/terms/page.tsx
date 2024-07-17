export default function Terms() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <ul className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
          <h1 className='font-bold text-xl'>Política de Privacidad</h1>
          <li className='px-2' id='correo'>
            <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary pt-4'>
              Recolección de Correos Electrónicos
            </h2>
            <p className='font-medium pt-1'>
              Al utilizar este sitio web, usted acepta las prácticas descritas
              en esta política de privacidad.
            </p>
          </li>
          <li className='px-2' id='recoleccion'>
            <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary pt-4'>
              Recolección de Información Personal
            </h2>
            <p className='font-medium pt-1'>
              Cuando usted llena un formulario en este sitio web para
              suscribirse a mi boletín informativo, recibir actualizaciones
              sobre los servicios que ofrezco o solicitar información, le pediré
              cierta información personal, como su nombre y dirección de correo
              electrónico. Esta información se utilizará únicamente para fines
              específicos no comerciales y no se compartirá con terceros sin su
              consentimiento explícito.
            </p>
          </li>
          <li className='px-2' id='uso'>
            <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary pt-4'>
              Uso de la Información
            </h2>
            <p className='font-medium pt-1'>
              La información recopilada se utiliza para enviarle actualizaciones
              sobre mis servicios, anuncios de nuevos proyectos, eventos o
              cualquier otra información relevante que considere de su interés.
              También puedo utilizar su información para mejorar mis servicios y
              personalizar su experiencia en mi sitio web.
            </p>
          </li>
          <li className='px-2' id='consentimiento'>
            <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary pt-4'>
              Consentimiento
            </h2>
            <p className='font-medium pt-1'>
              Al proporcionarme su información personal a través de estos
              formularios, usted otorga su consentimiento para recopilar,
              utilizar y almacenar esa información de acuerdo con esta política
              de privacidad.
            </p>
          </li>
          <li className='px-2' id='noparticipacion'>
            <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary pt-4'>
              Optar por no Participar
            </h2>
            <p className='font-medium pt-1'>
              Si en algún momento desea dejar de recibir comunicaciones de mi
              parte, puede optar por no participar siguiendo las instrucciones
              incluidas en cada correo electrónico que envío o poniéndose en
              contacto conmigo a través de la información de contacto
              proporcionada al final de esta página. Respetaré su solicitud y
              dejaré de enviarle comunicaciones en el futuro.
            </p>
          </li>
          <li className='px-2' id='seguridad'>
            <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary pt-4'>
              Seguridad de la Información
            </h2>
            <p className='font-medium pt-1'>
              Me comprometo a proteger la seguridad de su información personal y
              a tomar las medidas necesarias para garantizar su
              confidencialidad. Sin embargo, tenga en cuenta que ninguna medida
              de seguridad en línea es completamente infalible y no puedo
              garantizar la seguridad absoluta de su información.
            </p>
          </li>
          <li className='px-2' id='cambios'>
            <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary pt-4'>
              Cambios en la Política de Privacidad
            </h2>
            <p className='font-medium pt-1'>
              Me reservo el derecho de actualizar esta política de privacidad en
              cualquier momento. Cualquier cambio en esta política entrará en
              vigencia inmediatamente después de su publicación en esta página.
            </p>
          </li>
          <li className='px-2' id='contacto'>
            <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary pt-4'>
              Contacto
            </h2>
            <p className='font-medium pt-1'>
              Si tiene alguna pregunta sobre esta política de privacidad o sobre
              cómo manejo su información personal, no dude en ponerse en
              contacto conmigo a través de
              <a
                href='mailto:jhangmez.pe@gmail.com'
                className='text-light-primary dark:text-dark-onPrimary underline'
              >
                jhangmez.pe@gmail.com
              </a>
              .
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
