# HiLanG

Nutzbarmachung der Altdaten des Projekts HiLanG in der iDAI.world

## Überblick

Dieses Repository beinhaltet die Altdaten im Verzeichnis `daten_exportiert_aus_mdb/`. Aus diesen Daten wird mit Unterstützung von [Sequelize](https://npmjs.com/package/sequelize) und einem Skript zum Konvertieren der HiLanG Koordinaten in WGS84 (`lib/koordinateToLonLat.js`) eine SQLite-Datenbank erstellt, welche direkt in QGIS geladen werden kann, um dort die Layer `Raster` und `Reiseindex` als Vektor-Layer zur weiteren Verwendung zu exportieren.

## Systemvoraussetzungen

* [Node.js](https://nodejs.org/) in einer aktuellen Version
* [git](https://git-scm.com) in einer aktuellen Version. Optional.

## Installation

    git clone git@github.com:w3geo/hilang.git

erzeugt einen Clone des Repository zur lokalen Verwendung. Falls git nicht zur Verfügung steht, kann stattdessen ein Snapshot des Repository von https://github.com/w3geo/hilang/archive/main.zip heruntergeladen und ins Verzeichnis `hilang/` entpackt werden.

    cd hilang

wechselt ins Projektverzeichnis.

    npm install

installiert die Abhängigkeiten und erzeugt die SQLite Datenbank (`hilang.sqlite` aus den Altdaten, mit den Tabellen `Raster`, `Reiseberichte` und `Reiseindex`.

Nun kann das vorkonfigurierte QGIS-Projekt (`hilang.qgs`) geöffnet werden, um die Daten anzusehen und die Layer `Raster` und `Reiseindex` zu exportieren.

    