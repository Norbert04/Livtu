import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Generated App',
      theme: ThemeData(
        brightness: Brightness.dark,
        primarySwatch: Colors.blue,
        primaryColor: const Color(0xFF212121),
        canvasColor: const Color(0xFF303030),
        fontFamily: 'Roboto',
      ),
      home: Startpage(),
    );
  }
}

class Startpage extends StatefulWidget {
  const Startpage({super.key});
  @override
  _StartpageState createState() => new _StartpageState();
}

class _StartpageState extends State<Startpage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              "Learnify",
              style: TextStyle(
                fontSize: 21.0,
                color: const Color(0xFFffffff),
                fontWeight: FontWeight.w400,
              ),
            ),
            PopupMenuButton(
              onSelected: popupMenuSelected,
              itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
                const PopupMenuItem(
                  child: const Text("0"),
                ),
                const PopupMenuItem(
                  child: const Text("1"),
                ),
                const PopupMenuItem(
                  child: const Text("2"),
                ),
              ],
            ),
            Icon(Icons.insert_emoticon,
                color: const Color(0xFFffffff), size: 43.0)
          ]),
    );
  }

  void popupMenuSelected(String valueSelected) {}
}
