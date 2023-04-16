from flask import Flask, request, render_template_string
app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        prompt = request.form["prompt"]
        image_url = request.form["image_url"]
        emotion = detect_emotion(image_url, subscription_key)
        response = generate_response(prompt)
        response_with_emotion = f"{emotion.capitalize()} {response}"
        return render_template_string(html_template, response=response_with_emotion)
    else:
        return render_template_string(html_template)


html_template = """
<!DOCTYPE html>
<html>
  <head>
    <title>ChatGPT</title>
  </head>
  <body>
    <h1>ChatGPT</h1>
    <form method="POST">
      <label for="prompt">Enter a prompt:</label>
      <input type="text" id="prompt" name="prompt" required>
      <label for="image_url">Enter an image URL:</label>
      <input type="text" id="image_url" name="image_url" required>
      <button type="submit">Generate response</button>
    </form>
    {% if response %}
      <p>{{ response }}</p>
    {% endif %}
  </body>
</html>
"""
