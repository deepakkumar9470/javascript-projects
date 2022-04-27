import pdfkit


# from file
#pdfkit.from_file("blurgs.html", "Blurgs-Letter-Head.pdf", verbose=True, options={"enable-local-file-access": True})

pdfkit.from_file("index.html", "Blurgs-Letter-Head1.pdf", verbose=True, options={"enable-local-file-access": True})
