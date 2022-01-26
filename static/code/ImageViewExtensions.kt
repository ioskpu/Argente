/*
 * Set a animated vector on a [ImageView].
 *
 * @param drawable id of drawable resource
 * @param tint is tint of drawable resource
 */

fun ImageView.setAnimVectorCompat(@DrawableRes drawable: Int, @AttrRes tint: Int? = null) {
    val vector = AnimatedVectorDrawableCompat.create(context, drawable)
    if (tint != null) {
        vector?.mutate()
        vector?.setTint(context.getResourceColor(tint))
    }
    setImageDrawable(vector)
    vector?.start()
}
