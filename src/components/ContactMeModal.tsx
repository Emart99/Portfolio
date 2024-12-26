import ContactForm from "./ContactForm";

export default function ContactMeModal() {
  
  return (
    <>
      <div id="fullscreen-modal" className="overlay modal overlay-open:opacity-100 hidden p-0" role="dialog" tabIndex={-1}>
        <div className="modal-dialog overlay-open:opacity-100 max-w-none  ">
          <div className="modal-content h-full max-h-none justify-between rounded-none">
            <div className="modal-header">
              <button type="button" className="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#fullscreen-modal">
                <span className="icon-[tabler--x] size-10"></span>
              </button>
            </div>
            <div className="modal-body ">
              <ContactForm />
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </>
  )

}