module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [

        //站点1
        {
            name: 'SITEONE', //应用程序的名称
            script: '/root/www/siteone/bin/www', //应用程序的脚本路径
            cwd: '/root/www/siteone', //应用程序所在的目录
            exec_mode: 'cluster_mode', //应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
            error_file: '/root/pm2/log/error/siteone_error.log', //自定义应用程序的错误日志文件
            out_file: '/root/pm2/log/out/siteone_out.log', //自定义应用程序日志文件
            pid_file: '/root/pm2/log/pid/siteone.pid', //自定义应用程序的pid文件
            instances: 1, //服务进程的个数
            max_memory_restart: '1024M', //服务占用的内存超过1024M，会自动进行重启。
            env: {
                NODE_ENV: 'production'
            },
        },

        //站点2
        {
            name: 'SITETWO', //应用程序的名称
            script: '/root/www/sitetwo/bin/www', //应用程序的脚本路径
            cwd: '/root/www/sitetwo', //应用程序所在的目录
            exec_mode: 'cluster_mode', //应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
            error_file: '/root/pm2/log/error/sitetwo_error.log', //自定义应用程序的错误日志文件
            out_file: '/root/pm2/log/out/sitetwo_out.log', //自定义应用程序日志文件
            pid_file: '/root/pm2/log/pid/sitetwo.pid', //自定义应用程序的pid文件
            instances: 1, //服务进程的个数
            max_memory_restart: '1024M', //服务占用的内存超过1024M，会自动进行重启。
            env: {
                NODE_ENV: 'production'
            },
        }
    ],
};
