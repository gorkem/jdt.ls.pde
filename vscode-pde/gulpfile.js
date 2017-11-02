'use strict';
const gulp = require('gulp');
const gulp_tslint = require('gulp-tslint');
const cp = require('child_process');
const server_dir = '../';
const repo = server_dir + '/org.eclipse.jdt.ls.importer.pde.site/target/repository/plugins/'
const pluginGlobs = [
  repo + 'org.eclipse.equinox.p2.repository.tools_**',
  repo + 'org.eclipse.equinox.p2.publisher_**',
  repo + 'org.eclipse.ecf_**',
  repo + 'org.eclipse.equinox.p2.core_**',
  repo + 'org.eclipse.equinox.p2.touchpoint.natives_**',
  repo + 'org.eclipse.equinox.p2.director.app_**',
  repo + 'org.sat4j.core_**',
  repo + 'org.eclipse.equinox.p2.transport.ecf_**',
  repo + 'org.eclipse.ecf.provider.filetransfer_**',
  repo + 'org.apache.felix.scr_**',
  repo + 'org.eclipse.ecf.identity_**',
  repo + 'org.sat4j.pb_**',
  repo + 'org.tukaani.xz_**',
  repo + 'org.eclipse.equinox.p2.garbagecollector_**',
  repo + 'org.eclipse.pde.core_**',
  repo + 'org.eclipse.jdt.ls.importer.pde_**',
  repo + 'org.eclipse.team.core_**',
  repo + 'org.eclipse.ecf.filetransfer_**',
  repo + 'org.eclipse.equinox.p2.touchpoint.eclipse_**',
  repo + 'org.eclipse.equinox.p2.jarprocessor_**',
  repo + 'org.eclipse.equinox.p2.metadata_**',
  repo + 'org.eclipse.equinox.p2.artifact.repository_**',
  repo + 'org.eclipse.pde.build_**',
  repo + 'org.eclipse.equinox.ds_**',
  repo + 'org.eclipse.equinox.p2.director_**',
  repo + 'org.eclipse.equinox.p2.engine_**',
  repo + 'org.eclipse.equinox.concurrent_**',
  repo + 'org.eclipse.equinox.p2.metadata.repository_**',
  repo + 'org.eclipse.equinox.p2.publisher.eclipse_**',
  repo + 'org.eclipse.equinox.p2.repository_**',
  repo + 'org.eclipse.update.configurator_**'
];

gulp.task('tslint', () => {
    return gulp.src(['**/*.ts', '!**/*.d.ts', '!node_modules/**'])
      .pipe(gulp_tslint())
      .pipe(gulp_tslint.report());
});

gulp.task('build_server', ()=>
{
	cp.execSync(mvnw()+ ' clean package', {cwd:server_dir, stdio:[0,1,2]} );
  gulp.src(pluginGlobs)
		.pipe(gulp.dest('./server'))
});


function isWin() {
	return /^win/.test(process.platform);
}

function isMac() {
	return /^darwin/.test(process.platform);
}

function isLinux() {
	return /^linux/.test(process.platform);
}

function mvnw() {
  return "mvn";
	// return isWin()?"mvnw.cmd":"./mvnw";
}
