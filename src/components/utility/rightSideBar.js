
export default function RightBar({onRightBarClose}) {
    return (
        // Right off canvas and can add links to the necessary page as option
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Profile</h5>
                <button type="button" class="btn-close" onClick={onRightBarClose}  data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>

            </div>
        </div>
    )
}

