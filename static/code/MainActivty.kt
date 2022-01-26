private lateinit var anim: AnimationDrawable

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.main)

    findViewById<ImageView>(R.id.image).apply {
        setBackgroundResource(R.drawable.example_animated_vector)
        anim = background as AnimationDrawable
        anim.start()
    }
}
